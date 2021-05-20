import React from "react";
import profile_icon from "../img/profile_icon.png"; 
import shopping_basket from "../img/shopping_basket.png";
import "../style.css";

export default class NavbarAuthorized extends React.Component {
    render() {
        return (
            <nav className="topnav vertical-align-center">
                <a className="link" href="index.html">Catalog</a>
                <a href="shopping-basket.html">
                    <div className="image">
                         <img src={shopping_basket} alt="shopping_basket" className="responsive-image" />
                    </div>
                </a>
                <a href="profile.html">
                    <div className="image">
                        <img src={profile_icon} alt="Profile" className="responsive-image" />
                    </div>
                </a>
            </nav>
        );
    }
}