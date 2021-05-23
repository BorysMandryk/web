import React from 'react';
import "../style.css";

export default class EmailInput extends React.Component {
    render() {
        return (
            <label className="text-color-blue">Email
            <br /><input type="email" id="email" name="email" placeholder="email@test.com" value={this.props.email} onChange={this.props.handleChange}/>
            </label>
        );
    }
}