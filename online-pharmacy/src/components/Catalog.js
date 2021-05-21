import React from 'react';
import "../style.css";
import * as MedicationService from "../scripts/medication-service";
import MedicationItem from './MedicationItem';

export default class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            medications: []
        }
    }

    componentDidMount() {
        MedicationService.getAll().then(medicationsList =>
            this.setState({
                isLoaded: true,
                medications: medicationsList
            })
        )
    }

    render() {
        if (this.state.isLoaded) {      
            return (
                <main className="wrapper">
                    <h2 className="text-color-blue">List of medications</h2>
                    <div className="medication-list-container">
                        {this.state.medications.map((medication => {
                            return medication.quantity > 0 ? <MedicationItem key={medication.id} medicationData={medication}/> : null;
                        }))}
                    </div>
                </main>
            );
        }
        else {
            return <main className="wrapper">Loading</main>;
        }
    }
}