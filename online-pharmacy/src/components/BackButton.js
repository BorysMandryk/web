import React from 'react';
import "../style.css";
import arrow_back from "../img/arrow_back.png";
import { withRouter } from 'react-router-dom';

class BackButton extends React.Component {
    render () {
        return (
            <button onClick={this.props.handleClick}>
                <img src={arrow_back} alt="arrow_back" />
            </button>
        );
    }
}

export default withRouter(BackButton);