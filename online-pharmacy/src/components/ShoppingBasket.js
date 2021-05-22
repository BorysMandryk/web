import React from 'react';
import "../style.css";
import ProductList from "./ProductList";
import * as ShoppingBasketService from "../scripts/shopping-basket-service";

export default class ShoppingBasket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0
        }
    }

    calculateTotalPrice(difference) {
        const price = this.state.totalPrice + difference;
        this.setState({totalPrice: price});
    }

    handleClick () {
        if (!ShoppingBasketService.getAll()) {
            this.props.history.push("/");
        }

        else {
            this.props.history.push("/order");
        }
    }

    render() {
        return (
            <main className="wrapper">
                <h2 className="text-color-blue">Shopping basket</h2>
                <ProductList calculateTotalPrice={this.calculateTotalPrice.bind(this)}/>
                <div className="shopping-basket-order">
                    <div className="total-price text-color-blue">
                        Total price: <span className="text-color-dark-grey">{this.state.totalPrice} ₴</span>
                    </div>
                    <button id="place-order-button" onClick={() => this.handleClick()}>Place an order</button>
                </div>
            </main>
        );
    }
}