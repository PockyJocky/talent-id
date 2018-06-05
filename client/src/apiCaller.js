import 'whatwg-fetch'

// export const API_URL = `http://ec2-18-191-97-5.us-east-2.compute.amazonaws.com:3001/api`;
export const API_URL = `http://${process.env.REACT_APP_HOST || 'localhost'}:3001/api`;

export  default function callApi(endpoint, method, body) {
    console.log("hit")
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
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error("API Request failed.");
            }
            return response.json()
        });
}