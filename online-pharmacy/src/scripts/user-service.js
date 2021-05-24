import configData from "../config.json";

export function getCurrent() {
    const headers = new Headers({'Authorization': `Basic ${localStorage.credentials}`});
    return fetch(configData.BaseUrl + "/users/current", {
        credentials: "same-origin",
        headers: headers
    })
    .then(response => response.json())
    .catch((err) => console.log(err));
}

export function editCurrent(data) {
    const headers = new Headers({
        'Authorization': `Basic ${localStorage.credentials}`,
        'Content-Type': 'application/json'
    });
    return fetch(configData.BaseUrl + "/users/current",
        {method:'PUT',
        body: JSON.stringify(data),
        headers: headers
    });
}

export function deleteCurrent() {
    const headers = new Headers({
        'Authorization': `Basic ${localStorage.credentials}`
    });
    return fetch(configData.BaseUrl + "/users/current",
        {method:'DELETE',
        headers: headers
    });
}