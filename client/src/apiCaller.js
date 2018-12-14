import 'whatwg-fetch'

// allow other files to reference the api url
// the line below is the production url
// export const API_URL = `http://ec2-18-191-97-5.us-east-2.compute.amazonaws.com:3001/api`;
export const API_URL = `http://${process.env.REACT_APP_HOST || 'localhost'}:3001/api`;

/*
input:  endpoint as string
        method as string
        body as json object
*/
export  default function callApi(endpoint, method, body) {
// do the fetch request using the passed in variables
    return fetch(`${API_URL}/${endpoint}`, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    }).then(response => {
        //check if there was an error in the response
        if (!response.ok) {
            // console log the error
            console.error(response);
            // throw an exception
            throw new Error("API Request failed.");
        }
        //then return the response from the fetch request
        return response.json();
    })
}
