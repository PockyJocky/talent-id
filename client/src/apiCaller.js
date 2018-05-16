import 'whatwg-fetch'

export const API_URL = `http://localhost:3001/api`;

export  default function callApi(endpoint, method, body) {

    return fetch(`${API_URL}/${endpoint}`, {
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        mode: 'no-cors',
        method: method,
    })
        .then(response => response.json().then(json => ({json, response})))
        .then(({json, response}) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
        .then(
            response => response,
            error => error
        );
}