
var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('User session on response 200',()=>{
 test('fetching a subCategory 1 of items', (done)=>{
    request.get({url: baseURL + `/api/session` },(error,response,body)=>{
        expect(response.statusCode).to.equal(200);
        var bodyObject = JSON.parse(body);
        expect(bodyObject.name).to.equal("Mark");
        expect(bodyObject.email).to.equal("mark@domain.com");
        done();
    })
 })
})


describe('User session on response 400',()=>{
    test('fetching a subCategory 1 of items', (done)=>{
       request.get({url: baseURL + `/api/session123` },(error,response,body)=>{
           expect(response.statusCode).to.equal(404);
           done();
       })
    })
   })