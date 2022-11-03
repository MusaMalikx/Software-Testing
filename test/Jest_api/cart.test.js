var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('fetching cart API on response 200', () => {
    test('fetching cart items', (done) => {
        request.get(baseURL + "/api/cart", (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            var bodyObject = JSON.parse(body);
            expect(bodyObject.pageData.title).to.equal("My Cart");
            done();
        })
    })
})

describe('fetching cart API on response 400', () => {
    test('fetching cart items', (done) => {
        request.get(baseURL + "/api/cart213", (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        })
    })
})