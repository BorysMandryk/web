import React from 'react';
import "../style.css";
import * as ShoppingBasketService from "../scripts/shopping-basket-service";
import { withRouter } from 'react-router-dom';

class BuyButton extends React.Component {
    handleClick () {
        if (!localStorage.getItem("credentials")) {
            this.props.history.push("/login");
        }

        else {
            ShoppingBasketService.addProduct(this.props.medicationId);
            this.props.history.push("/shopping-basket");
        }
    }

    render () {
        return <button className={this.props.className} onClick={() => this.handleClick()}>Buy</button>;
    }
}

export default withRouter(BuyButton);