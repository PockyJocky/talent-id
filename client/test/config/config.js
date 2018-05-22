process.env.NODE_ENV = 'test'

require('babel-register')();
require.extensions['.css'] = function () {return null}

let jsdom = require('jsdom');

const { JSDOM } = jsdom;
let exposedProperties = ['window', 'navigator', 'document'];const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});
global.navigator = {
    userAgent: 'node.js'
};