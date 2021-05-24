import React from 'react';
import "../style.css";
import NavbarAuthorized from "./NavbarAuthorized";
import NavbarUnauthorized from "./NavbarUnauthorized";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    render(){
        return (
            <header className="bg-color-grey border-bottom-blue">
                <h1>
                    <Link to="/">online<span className="text-color-blue">Pharmacy</span></Link>
                </h1>
                {localStorage.getItem("credentials") ? <NavbarAuthorized /> : <NavbarUnauthorized />}
            </header>
        );
    }

}
