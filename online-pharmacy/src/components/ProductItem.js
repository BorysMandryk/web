import React from 'react';
import "../style.css";
import medication from '../img/medication.jpg';
import * as MedicationService from "../scripts/medication-service";
import * as ShoppingBasketService from "../scripts/shopping-basket-service";
import {Link} from 'react-router-dom';

export default class ShoppingBasket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showProduct: true,
            isLoaded: false,
            medication: null,
            amount: this.props.productData.amount
        };
    }

    componentDidMount() {
        MedicationService.getById(this.props.productData.med_id)
        .then(medicationData => {
                this.setState({
                    isLoaded: true,
                    medication: medicationData
                });
                this.props.calculateTotalPrice(this.state.amount * this.state.medication.cost);
        });
    }

    changeAmount(event) {
        let value = parseInt(event.target.value);
        if (value > this.state.medication.quantity) 
            value = this.state.medication.quantity;
        else if (value < 1)
            value = 1;
        ShoppingBasketService.changeAmount(this.props.productData.med_id, value);
        const difference = (value - this.state.amount) * this.state.medication.cost;
        this.props.calculateTotalPrice(difference);
        this.setState({amount: value});
    }

    removeProduct() {
        this.props.calculateTotalPrice(-this.state.amount * this.state.medication.cost);
        ShoppingBasketService.removeProduct(this.props.productData.med_id);
        this.setState({showProduct: false});
    }

    render() {
        if (this.state.isLoaded && this.state.showProduct) {
            return (            
                <div className="medication-order border-bottom-blue">
                    <div className="medication-order-info">
                        <div className="image vertical-align-center">
                            <img src={medication} alt="edit" className="responsive-image vertical-align-center" />
                        </div>
                        <div className="medication-order-name">
                            <Link to={`/medications/${this.state.medication.id}`}>{this.state.medication.name}</Link>
                        </div>
                    </div>
                    <div className="medication-order-trade">
                        <input type="number" className="amount-input" id="amount" name="amount" ref={this.amountRef}  
                        min="1" max={this.state.medication.quantity} value={this.state.amount} onChange={(event) => this.changeAmount(event)}/>
                        <div className="medication-order-price">{this.state.amount * this.state.medication.cost} ₴</div>
                        <button className="remove-button" onClick={() => this.removeProduct()}>Remove</button>
                    </div>
                </div>
            );
        }
        else if (!this.state.isLoaded) {
            return <div>Loading</div>;
        }
        else if (!this.state.showProduct) {
            return null;
        }
    }
}