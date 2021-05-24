import React from 'react';
import "../style.css";

export default class AddressInput extends React.Component {
    render() {
        return (
            <label>Address
                <p><input type="text" id="address" name="address" value={this.props.address} onChange={this.props.handleChange} /></p>
            </label>
        );
    }
}