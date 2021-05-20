import {baseUrl} from "./constants.js";

export default class MedicationService {
    static getAll() {
        return fetch(baseUrl + "/medications")
        .then(response => response.json())
        .then(json => json.medications)
        .catch((err) => console.log(err));
    }

    static getById(id) {
        return fetch(baseUrl + "/medications/" + id)
        .then(response => response.json())
        .catch((err) => console.log(err));
    }
}