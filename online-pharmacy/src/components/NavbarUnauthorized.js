import React from "react";
import "../style.css";

export default class NavbarUnauthorized extends React.Component {
    render() {
        return (
            <nav className="topnav vertical-align-center">
                <a className="link" href="index.html">Catalog</a>
                <a className="link" href="sign-in.html">Sign In</a>
                <a href="sign-up.html">
                    <button>Sign Up</button>
                </a>
            </nav>
        );
    }
}