import {baseUrl} from "./constants.js";

export async function login(email, password){
    const credentials = {
        "email": email,
        "password": password
    };
    const headers = new Headers({'Content-Type': 'application/json'});

    const response = await fetch(baseUrl + "/login",
      {method:'POST',
      body: JSON.stringify(credentials),
      headers: headers
    });

    const message = await response.text();
    if (response.ok)
    {
        localStorage.setItem("credentials", window.btoa(email + ":" + password));
    }
    console.log(message);
    return response;
}

export async function createUser(email, password) {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    const data = {
        "email": email,
        "password": password
    }
    const response = await fetch(baseUrl + "/users",
      {method:'POST',
      body: JSON.stringify(data),
      headers: headers
    })

    const message = await response.text();
    if (response.ok)
    {
        localStorage.setItem("credentials", window.btoa(email + ":" + password));
    }
    console.log(message);
    return response;
}
