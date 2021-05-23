import React from 'react';
import "../style.css";
import FullNameInput from "./FullNameInput";
import PhoneInput from "./PhoneInput";
import AddressInput from "./AddressInput";
import * as ShoppingBasketService from "../scripts/shopping-basket-service";
import * as UserService from "../scripts/user-service";
import * as OrderService from "../scripts/order-service";
import { withRouter } from 'react-router-dom';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            patronymic: "",
            phone: "",
            address: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }

    componentDidMount() {
        UserService.getCurrent()
        .then(userData => this.setState({
            first_name: userData.first_name,
            last_name: userData.last_name,
            patronymic: userData.patronymic,
            phone: userData.phone,
            address: userData.address
        })).catch (error => {
            console.log(error)
            this.props.history.push("/login");
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }    

    async placeOrder() {
        if (this.state.first_name && this.state.last_name && this.state.patronymic && this.state.phone && this.state.address) {
            try {
                const userServiceResponse = await UserService.editCurrent(this.state);
                if (!userServiceResponse.ok) {
                    throw Error(userServiceResponse.statusText);
                }
                else {
                    const products = {"products": JSON.parse(localStorage.getItem("products"))};
                    const orderServiceResponse = await OrderService.placeAnOrder(products);
                    if (!orderServiceResponse.ok) {
                        throw Error(orderServiceResponse.statusText);
                    }
                    else {
                        ShoppingBasketService.removeAll();
                        localStorage.removeItem("totalPrice");
                        this.props.history.push("/");
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    render() {
        return (
            <main className="wrapper">
                <h2 className="text-color-blue">Order</h2>
                <div className="order">
                    <form className="order-info text-color-blue">
                        <FullNameInput 
                            first_name={this.state.first_name} 
                            last_name={this.state.last_name} 
                            patronymic={this.state.patronymic} 
                            handleChange={this.handleChange}/>
                        <PhoneInput 
                            phone={this.state.phone} 
                            handleChange={this.handleChange}/>
                        <AddressInput 
                            address={this.state.address} 
                            handleChange={this.handleChange}/>
                    </form>
                    <div className="place-order">
                        <div className="total-price text-color-blue">
                            Total price: <p className="text-color-dark-grey">{localStorage.getItem("totalPrice")} ₴</p>
                        </div>
                        <button id="place-order-button" onClick={this.placeOrder}>Place an order</button>
                    </div>
                </div>
            </main>
        );
    }
}

export default withRouter(Order);