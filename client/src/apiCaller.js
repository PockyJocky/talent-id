import 'whatwg-fetch'

// export const API_URL = `http://ec2-18-191-97-5.us-east-2.compute.amazonaws.com:3001/api`;
export const API_URL = `http://${process.env.REACT_APP_HOST || 'localhost'}:3001/api`;

export  default function callApi(endpoint, method, body) {
    return fetch(`${API_URL}/${endpoint}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: body,
    }).then(response => {
        if (!response.ok) {
            console.error(response);
            throw new Error("API Request failed.");
        }
        return response.json()
    });
}