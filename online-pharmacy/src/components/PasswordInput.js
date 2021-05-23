import React from 'react';
import "../style.css";

export default class PasswordInput extends React.Component {
    render() {
        return (
            <label className="text-color-blue">Password
            <br /><input type="password" id="password" name="password" placeholder="********" value={this.props.password} onChange={this.props.handleChange}/>
            </label>
        );
    }
}