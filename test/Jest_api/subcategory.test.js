
var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('SubCategory on response 200',()=>{
    test('fetching a subCategory 1 of items', (done)=>{
        request.get({url: baseURL+ `/api/s/1` },(error,response,body)=>{
            expect(response.statusCode).to.equal(200);
            var bodyObject = JSON.parse(body);
            expect(bodyObject.pageData.name).to.equal("Subcategory 1");
            done();
        })
     })
     test('fetching a subCategory 999 of items', (done)=>{
        request.get({url: baseURL+ `/api/s/abc` },(error,response,body)=>{
            expect(response.statusCode).to.equal(200);
            var bodyObject = JSON.parse(body);
            expect(bodyObject.pageData.name).to.equal("Subcategory abc");
            done();
        })
     })
})