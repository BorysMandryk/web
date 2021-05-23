import React from 'react';
import "../style.css";
import arrow_back from "../img/arrow_back.png";
import { withRouter } from 'react-router-dom';

class BackButton extends React.Component {
    render () {
        return (
            <div className="return">
                <button onClick={this.props.handleClick}>
                    <img src={arrow_back} alt="arrow_back" />
                </button>
            </div>
        );
    }
}

export default withRouter(BackButton);