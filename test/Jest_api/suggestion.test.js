var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('fetching suggestions API on response 200',()=>{
    test('fetching groups of suggestions',(done)=>{
       request.get(baseURL + "/api/suggestions",(error,response,body)=>{
           expect(response.statusCode).to.equal(200);
           done();
       })
    })
})

describe('fetching products suggestion API on response 200',()=>{
    test('fetching groups of product 1 suggestions',(done)=>{
       request.get(baseURL + "/api/p/1/suggestions",(error,response,body)=>{
           expect(response.statusCode).to.equal(200);
           done();
       })
    })
})

describe('fetching suggestions API on response 400',()=>{
    test('fetching groups of suggestions',(done)=>{
       request.get(baseURL + "/api/suggestions312",(error,response,body)=>{
           expect(response.statusCode).to.equal(404);
           done();
       })
    })
})