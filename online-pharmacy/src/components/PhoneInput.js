import React from 'react';
import "../style.css";

export default class PhoneInput extends React.Component {
    render() {
        return (
            <label>Phone
                <p><input type="tel" id="phone" name="phone" value={this.props.phone} onChange={this.props.handleChange} /></p>
            </label>
        );
    }
}