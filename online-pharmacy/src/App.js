import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import MedicationAbout from './components/MedicationAbout';
import ShoppingBasket from './components/ShoppingBasket';
import Order from './components/Order';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={Catalog} />
                    <Route path='/medications/:medicationId' component={MedicationAbout} />
                    <Route path='/shopping-basket' component={ShoppingBasket} />
                    <Route path='/order' component={Order} />
                    <Route path='/sign-in' component={SignIn} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/profile' component={Profile} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}