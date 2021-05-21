import React from 'react';
import "../style.css";
import * as MedicationService from "../scripts/medication-service";
import medication from '../img/medication.jpg';
import BuyButton from './BuyButton';

export default class Medication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            medication: null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.medicationId;
        MedicationService.getById(id).then(medicationData =>
            this.setState({
                isLoaded: true,
                medication: medicationData
            })
        )
    }

    render() {
        if (this.state.isLoaded) {      
            return (
                <main className="wrapper">
                    <h2 className="text-color-blue">{this.state.medication.name}</h2>
                    <div className="medication-about">
                        <div className="medication-about-left medication-image">
                            <img src={medication} alt="Medication" className="responsive-image" />
                        </div>
                        <div className="medication-about-right">
                            <p className="description">{this.state.medication.description}</p>
                            <div className="medication-trade">
                                <div className="medication-trade-price vertical-align-center">{this.state.medication.cost} ₴</div>
                                <BuyButton medicationId={this.state.medication.id}/>
                            </div>
                        </div>
                    </div>
                </main>
            );
        }
        else {
            return <main className="wrapper">Loading</main>;
        }
    }
}

