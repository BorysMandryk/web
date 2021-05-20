import React from 'react';
import "../style.css";
import NavbarAuthorized from "./NavbarAuthorized";
import NavbarUnauthorized from "./NavbarUnauthorized";

export default class Header extends React.Component{
    render(){
        return (
        <header className="bg-color-grey border-bottom-blue">
            <h1>
                <a href="index.html">online<span className="text-color-blue">Pharmacy</span></a>
            </h1>
            {localStorage.getItem("credentials") ? <NavbarAuthorized /> : <NavbarUnauthorized />}
        </header>
        );
    }

}
