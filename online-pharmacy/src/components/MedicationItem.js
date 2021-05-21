import React from 'react';
import "../style.css";
import medication from '../img/medication.jpg';
import * as ShoppingBasketService from "../scripts/shopping-basket-service";
import {Link} from 'react-router-dom';
import BuyButton from './BuyButton';


export default class MedicationItem extends React.Component {
    buyProduct () {
        if (!localStorage.getItem("credentials"))
            this.props.history.push("/login");
        else{
            ShoppingBasketService.addProduct(this.props.medicationData.id);
            this.props.history.push("/shopping-basket");
        }
    }

    render() {
        return (
            <div className="medication-item border-bottom-blue">
                <div className="medication-item-container">
                    <Link to={`/medications/${this.props.medicationData.id}`}>
                        <div className="image vertical-align-center">
                            <img src={medication} alt="Medication" className="responsive-image" />
                        </div>
                    </Link>
                    <div className="medication-item-name text-color-blue">
                        <Link to={`/medications/${this.props.medicationData.id}`}>{this.props.medicationData.name}</Link>
                    </div>
                    <div className="medication-item-trade">
                        <BuyButton className="medication-item-buy-button" medicationId={this.props.medicationData.id}>Buy</BuyButton>
                        <div className="medication-item-price vertical-align-center">{this.props.medicationData.cost} ₴</div>
                    </div>
                </div>
            </div>
        );
    }
}
