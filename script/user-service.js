import {baseUrl} from "./constants.js";

export default class UserService {
    static getCurrent() {
        const headers = new Headers({'Authorization': `Basic ${localStorage.credentials}`});
        return fetch(baseUrl + "/users/current", {
            credentials: "same-origin",
            headers: headers
        })
        .then(response => response.json())
        .catch((err) => console.log(err));
    }

    static editCurrent(data) {
        const headers = new Headers({
            'Authorization': `Basic ${localStorage.credentials}`,
            'Content-Type': 'application/json'
        });
        return fetch(baseUrl + "/users/current",
            {method:'PUT',
            body: JSON.stringify(data),
            headers: headers
        });
    }
}