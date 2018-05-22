import 'whatwg-fetch'

export const API_URL = `http://ec2-18-191-97-5.us-east-2.compute.amazonaws.com:3001/api`;
// export const API_URL = `http://localhost:3001/api`;

export  default function callApi(endpoint, method, body) {
    return fetch(`${API_URL}/${endpoint}`, {
        headers: new Headers({
            //this is required because of mode: no-cors
            'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: body,
        //this is required to keep our backend from shitting itself
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