import 'whatwg-fetch'

export const API_URL = `http://localhost:3001/api`;

export  default async function callApi(endpoint, method, body) {
    return await fetch(`${API_URL}/${endpoint}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept' : 'application/json'
        },
        credentials : "same-origin",
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