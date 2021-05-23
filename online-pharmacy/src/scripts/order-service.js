import configData from "../config.json";

export function getAll() {
    return fetch(configData.BaseUrl + "/store/orders")
    .then(response => response.json())
    .then(json => json.orders)
    .catch((err) => console.log(err));
}

export function getById(id) {
    return fetch(configData.BaseUrl + "/store/orders/" + id)
    .then(response => response.json())
    .catch((err) => console.log(err));
}

export function placeAnOrder(data) {
    const headers = new Headers({
        'Authorization': `Basic ${localStorage.credentials}`,
        'Content-Type': 'application/json'
    });
    return fetch(configData.BaseUrl + "/store/orders",
        {method:'POST',
        body: JSON.stringify(data),
        headers: headers
    });
}
