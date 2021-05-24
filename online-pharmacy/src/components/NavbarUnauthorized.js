import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default class NavbarUnauthorized extends React.Component {
    render() {
        return (
            <nav className="topnav vertical-align-center">
                <Link className="link" to="/">Catalog</Link>
                <Link className="link" to="/sign-in">Sign In</Link>
                <Link to="/sign-up">
                    <button>Sign Up</button>
                </Link>
            </nav>
        );
    }
}