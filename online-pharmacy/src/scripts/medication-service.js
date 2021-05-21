import configData from "../config.json";

export const getAll = () => {
    return fetch(configData.BaseUrl + "/medications")
    .then(response => response.json())
    .then(json => json.medications)
    .catch((err) => console.log(err));
}

export const getById = (id) => {
    return fetch(configData.BaseUrl + "/medications/" + id)
    .then(response => response.json())
    .catch((err) => console.log(err));
}
