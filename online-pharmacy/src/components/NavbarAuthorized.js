import React from "react";
import profile_icon from "../img/profile_icon.png"; 
import shopping_basket from "../img/shopping_basket.png";
import "../style.css";
import { Link } from "react-router-dom";

export default class NavbarAuthorized extends React.Component {
    render() {
        return (
            <nav className="topnav vertical-align-center">
                <Link className="link" to="/">Catalog</Link>
                <Link to="/shopping-basket">
                    <div className="image">
                         <img src={shopping_basket} alt="shopping_basket" className="responsive-image" />
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="image">
                        <img src={profile_icon} alt="Profile" className="responsive-image" />
                    </div>
                </Link>
            </nav>
        );
    }
}