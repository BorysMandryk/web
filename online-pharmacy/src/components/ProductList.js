import React from 'react';
import "../style.css";
import ProductItem from "./ProductItem";

export default class ProductList extends React.Component {
        constructor(props) {
        super(props);
        const products = JSON.parse(localStorage.getItem('products'));
        this.state = {
            products: products
        }
    }

    renderProducts() {
        if (this.state.products) {
            return this.state.products.map((product => {
                return <ProductItem key={product.med_id} productData={product} calculateTotalPrice={this.props.calculateTotalPrice} />
            }));
        }
    }

    render() {
        return (
            <div className="shopping-basket" id="shopping-basket">
                {this.renderProducts()}
            </div>
        );
    }
}