import React from 'react';
import "../style.css";
import * as AuthService from "../scripts/auth-service";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Error from './Error';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }    

    async signIn(event) {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            const response = await AuthService.login(this.state.email, this.state.password);
            if (!response.ok)
            {
                const message = (response.status === 400) ? "Invalid data" : "Wrong email or password";
                this.setState({errorMessage: message});
            }
            else
            {
                this.goBack();
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
                <form className="sign-in-form" onSubmit={this.signIn}>
                    <h2 className="text-color-blue text-align-center">Sign In</h2>
                    <EmailInput 
                        email={this.state.phone} 
                        handleChange={this.handleChange}/>
                    <PasswordInput 
                        password={this.state.password} 
                        handleChange={this.handleChange}/>
                    {(this.state.errorMessage) ? <Error message={this.state.errorMessage}/> : null}
                    <div className="helper-links vertical-align-center">
                        <label>
                            <input type="checkbox" id="remember-me" name="remember-me" />
                            Remember me
                        </label>
                        <Link to="/sign-in" className="text-color-blue">
                            Forgot password?
                        </Link>
                    </div>
                    <button type="submit" id="sign-in-button">Sign In</button>
                    <div className="bottom-links">
                        <p>Don't have an account? <Link to="/sign-up" className="text-color-blue">Sign Up</Link></p>
                    </div>
                </form>
            </main>
        );
    }
}