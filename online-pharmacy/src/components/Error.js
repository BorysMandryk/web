import React from 'react';
import "../style.css";

export default class Error extends React.Component {
    render() {
        return <p id="error">{this.props.message}</p>;
    }
}