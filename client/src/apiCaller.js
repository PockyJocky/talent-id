import 'whatwg-fetch'

export const API_URL = `http://localhost:3001/api`;

export  default function callApi(endpoint, method, body) {
    console.log(body);
    return fetch(`${API_URL}/${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            'Credentials' : 'same-origin'
        },
        method,
        body: body,
    })
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }    return json;
        })
        .then(
            response => response,
            error => error
        );
}