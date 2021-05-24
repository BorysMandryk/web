import React from 'react';
import "../style.css";

export default class FullNameInput extends React.Component {
    render() {
        return (
            <div className="full-name">
                <label>First name
                    <p><input type="text" id="first_name" name="first_name" value={this.props.first_name} onChange={this.props.handleChange}/></p>
                </label>
                <label>Last name
                    <p><input type="text" id="last_name" name="last_name" value={this.props.last_name} onChange={this.props.handleChange}/></p>
                </label>
                <label>Patronymic
                    <p><input type="text" id="patronymic" name="patronymic" value={this.props.patronymic} onChange={this.props.handleChange}/></p>
                </label>
            </div>
        );
    }
}