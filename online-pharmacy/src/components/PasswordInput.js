import React from 'react';
import "../style.css";

export default class PasswordInput extends React.Component {
    render() {
        return (
            <label className="text-color-blue">{this.props.label || "Password"}
                <p><input type="password" name={this.props.name || "password"} placeholder="********" value={this.props.password} onChange={this.props.handleChange}/></p>
            </label>
        );
    }
}