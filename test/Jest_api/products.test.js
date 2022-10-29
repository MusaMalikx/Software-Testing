
var request = require('request');
var expect = require('chai').expect;
var baseURL = "http://localhost:3000";

describe('fetching Products API on response 200',()=>{
 test('fetching Product 1',(done)=>{
    request.get({url: baseURL + "/api/p/1" },(error,response,body)=>{
        var bodyObject = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(bodyObject.pageData.product.name).to.equal("Product 1");
        // console.log(bodyObject.pageData.product);
        done();
    })
 })
 test('fetching Product 1 with Grey color', (done)=>{
    request.get({url: baseURL + `/api/p/1?color="grey"` },(error,response,body)=>{
        var bodyObject = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(bodyObject.pageData.product.name).to.equal("Product 1");
         expect(bodyObject.pageData.product.colors[3].id).to.equal("grey");
        done();
    })
 })

 test('fetching Product 1 with Grey color', (done)=>{
    request.get({url: baseURL + `/api/p/1?color="grey"` },(error,response,body)=>{
        var bodyObject = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(bodyObject.pageData.product.name).to.equal("Product 1");
         expect(bodyObject.pageData.product.colors[3].id).to.equal("grey");
        done();
    })
 })
})

describe('fetching API on response 500',()=>{
    test('fetching Product abc',(done)=>{
       request.get({url: baseURL +'/api/p/abc'},(error,response,body)=>{
           expect(response.statusCode).to.equal(500);
           done();
       })
    })
   })