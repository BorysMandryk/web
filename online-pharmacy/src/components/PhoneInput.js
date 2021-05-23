import React from 'react';
import "../style.css";

export default class PhoneInput extends React.Component {
    render() {
        return (
            <div>
                <label>Phone
                <br /><input type="tel" id="phone" name="phone" value={this.props.phone} onChange={this.props.handleChange} />
                </label>
            </div>
        );
    }
}