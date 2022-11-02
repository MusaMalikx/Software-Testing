var should = require('should');
var request = require('request');
var expect = require('chai').expect;
var baseURL = 'https://v2.jokeapi.dev/joke/Any?amount=10';
var util = require('util');

describe('fetching Jokes at 3am hehe',()=>{
 it('misc jokes',(done)=>{
    request.get({url: baseURL},(error,response,body)=>{
        var bodyObject = JSON.parse(body);
        expect(bodyObject.amount).to.equal(10);
        expect(response.statusCode).to.equal(200);
        console.log(bodyObject.jokes.filter((item)=>item.category=='Misc'));
        done();
    })
 })
 it('Programming jokes',(done)=>{
    request.get({url: baseURL},(error,response,body)=>{
        var bodyObject = JSON.parse(body);
        expect(bodyObject.amount).to.equal(10);
        expect(response.statusCode).to.equal(200);
        console.log(bodyObject.jokes.filter((item)=>item.category=='Programming'));
        done();
    })
 })
})