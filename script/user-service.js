import {baseUrl} from "./constants.js";

export default class UserService {
    static getCurrent() {
        return fetch(baseUrl + "/users/current")
        .then(response => response.json())
        .then(json => json.orders)
        .catch((err) => console.log(err));
    }

    static editCurrent(data) {
        const headers = new Headers({
            'Authorization': `Basic ${localStorage.credentials}`,
            'Content-Type': 'application/json'
        });
        return fetch(baseUrl + "/user/current",
            {method:'PUT',
            body: JSON.stringify(data),
            headers: headers
        });
    }
}