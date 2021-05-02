import {baseUrl} from "./constants.js";

export default class OrderService {
    static getAll() {
        return fetch(baseUrl + "/store/order")
        .then(response => response.json())
        .then(json => json.orders)
        .catch((err) => console.log(err));
    }

    static getById(id) {
        return fetch(baseUrl + "/store/order/" + id)
        .then(response => response.json())
        .catch((err) => console.log(err));
    }

    static placeAnOrder(data) {
        const headers = new Headers({
            'Authorization': `Basic ${localStorage.credentials}`,
            'Content-Type': 'application/json'
        });
        return fetch(baseUrl + "/store/order",
            {method:'POST',
            body: JSON.stringify(data),
            headers: headers
        });
    }
}