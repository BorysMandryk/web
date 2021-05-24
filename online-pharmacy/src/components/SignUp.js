import React from 'react';
import "../style.css";
import * as AuthService from "../scripts/auth-service";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Error from './Error';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmed_password: "",
            errorMessage: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }    

    async signUp(event) {
        event.preventDefault();
        if (this.state.email && this.state.password && this.state.confirmed_password) {
            if (this.state.password === this.state.confirmed_password) {
                const response = await AuthService.createUser(this.state.email, this.state.password);
                if (!response.ok)
                {
                    const message = (response.status === 400) ? "Invalid data" : "Email is already exists";
                    this.setState({errorMessage: message});
                }
                else
                {
                    this.goBack();
                }
            }
            else {
                this.setState({errorMessage: "Passwords are different"});
            }           
        }
        else (
            this.setState({errorMessage: "Fill all fields"})
        )
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <main className="wrapper">
                <BackButton handleClick={this.goBack}/>
                <form className="sign-up-form" onSubmit={this.signUp} >
                    <h2 className="text-color-blue text-align-center">Sign Up</h2>
                    <EmailInput 
                        email={this.state.phone} 
                        handleChange={this.handleChange}/>
                    <PasswordInput 
                        password={this.state.password} 
                        handleChange={this.handleChange}/>
                    <PasswordInput 
                        name={"confirmed_password"}
                        label={"Confirm password"}
                        password={this.state.confirmed_password} 
                        handleChange={this.handleChange}/>
                    {(this.state.errorMessage) ? <Error message={this.state.errorMessage}/> : null}
                    <button type="submit" id="sign-up-button">Sign Up</button>
                    <div className="bottom-links">
                        <p>Already have an account? <Link to="/sign-in" className="text-color-blue">Sign In</Link></p>
                    </div>
                </form>
            </main>
        );
    }
}