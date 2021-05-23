import React from 'react';
import "../style.css";

export default class AddressInput extends React.Component {
    render() {
        return (
            <div>
                <label>Address
                <br /><input type="text" id="address" name="address" value={this.props.address} onChange={this.props.handleChange} />
                </label>
            </div>
        );
    }
}