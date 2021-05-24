import React from 'react';
import "../style.css";
import { Link } from "react-router-dom";
import FullNameInput from "./FullNameInput";
import PhoneInput from "./PhoneInput";
import AddressInput from "./AddressInput";
import SaveResult from "./SaveResult";
import * as UserService from "../scripts/user-service";
import * as ShoppingBasketService from "../scripts/shopping-basket-service";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            email: "",
            first_name: "",
            last_name: "",
            patronymic: "",
            phone: "",
            address: "",
            saveResult: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        UserService.getCurrent()
        .then(userData => this.setState({
            isLoaded: true,
            email: userData.email,
            first_name: userData.first_name || "",
            last_name: userData.last_name || "",
            patronymic: userData.patronymic || "",
            phone: userData.phone || "",
            address: userData.address || ""
        })).catch (error => {
            console.log(error)
            this.props.history.push("/sign-in");
        });
    }

    saveChanges(event) {
        event.preventDefault();
        const userData = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            patronymic: this.state.patronymic,
            phone: this.state.phone,
            address: this.state.address
        }
        UserService.editCurrent(userData).then(response => {
            (response.ok) ? this.setState({saveResult: "Saved"}) : this.setState({saveResult: "Invalid data"});
            setTimeout(() => {
                this.setState({saveResult: ""});
            }, 5000);
        });
    }

    logout(event) {
        event.preventDefault();
        ShoppingBasketService.removeAll();
        localStorage.removeItem("totalPrice");
        localStorage.removeItem("credentials");
        this.props.history.push("/");
        this.props.history.go(0);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }    
    
    render() {
        if (this.state.isLoaded) {
            return (
                <main className="wrapper">
                    <h2 className="text-color-blue">Profile</h2>
                    <form className="profile-info text-color-blue" onSubmit={this.saveChanges}>
                        <FullNameInput 
                            first_name={this.state.first_name} 
                            last_name={this.state.last_name} 
                            patronymic={this.state.patronymic} 
                            handleChange={this.handleChange}/>
                        <div>
                            Email
                            <p className="text-color-dark-grey" id="email">{this.state.email}</p>
                        </div>
                        <PhoneInput 
                            phone={this.state.phone} 
                            handleChange={this.handleChange}/>
                        <AddressInput 
                            address={this.state.address} 
                            handleChange={this.handleChange}/>
                        <br />
                        <div id="save">
                            <button type="submit" id="save-button">Save</button>
                            {(this.state.saveResult) ? <SaveResult saveResult={this.state.saveResult}/> : null}
                        </div>
                    </form>
                    <a className="text-color-blue" id="logout" onClick={this.logout}>Log out</a>
                </main>
            );
        }
        else {
            return <main className="wrapper">Loading</main>
        }
    }
}