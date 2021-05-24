import React from 'react';
import "../style.css";

export default class Error extends React.Component {
    render() {
        return <span id="save-result" className="text-color-blue">{this.props.saveResult}</span>;
    }
}