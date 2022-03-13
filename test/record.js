const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../server');
//Our parent block
describe('Records', () => {
    describe('/POST', () => {

        it.only('it should return records and status as 200 on successful call of api', function (done) {
            chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "maxCount": 2000,
                    "minCount": 93,
                    "startDate": "2015-10-15T08:42:13.661Z",
                    "endDate": "2016-10-30T08:45:13.661Z"
                }).end((err, res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body.records.length).to.gte(0)
                    done();
                });

        });


        it('it should throw error if startDate is missing', function(done) {
              chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "maxCount": 2000,
                    "minCount": 93,
                    "endDate": "2016-10-30T08:45:13.661Z"
                }).end((err, res) => {
                    expect(res.status).to.be.equal(500)
                    expect(res.body.error).to.equal("startDate and endDate are mandatory and should be passed in string format")
                    done();
                });
            

        });

        it('it should throw error if endDate is missing', function(done) {
              chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "maxCount": 2000,
                    "minCount": 93,
                    "startDate": "2015-10-15T08:42:13.661Z",
                }).end((err, res) => {
                    expect(res.status).to.be.equal(500)
                    expect(res.body.error).to.equal("startDate and endDate are mandatory and should be passed in string format")
                    done();
                });
            

        });

        it('it should throw error if maxCount is missing', function(done) {
              chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "minCount": 93,
                    "startDate": "2015-10-15T08:42:13.661Z",
                    "endDate": "2016-10-30T08:45:13.661Z"
                }).end((err, res) => {
                    expect(res.status).to.be.equal(500)
                    expect(res.body.error).to.equal("maxCount and minCount are mandatory and should be passed in number format")

                    done();
                });
            

        });

        it('it should throw error if minCount is missing', function(done) {
              chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "maxCount": 2000,
                    "startDate": "2015-10-15T08:42:13.661Z",
                    "endDate": "2016-10-30T08:45:13.661Z"
                }).end((err, res) => {
                    expect(res.status).to.be.equal(500)
                    expect(res.body.error).to.equal("maxCount and minCount are mandatory and should be passed in number format")

                    done();
                });
            

        });

        it('it should throw error if minCount is greater than maxCount', function(done) {
              chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "maxCount": 2000,
                    "minCount": 2001,
                    "startDate": "2015-10-15T08:42:13.661Z",
                    "endDate": "2016-10-30T08:45:13.661Z"
                }).end((err, res) => {
                    expect(res.status).to.be.equal(500)
                    expect(res.body.error).to.equal("maxCount should be greated than minCount")
                    done();
                });
            

        });

        it('it should throw error if startDate is greater than endDate', function(done) {
              chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "maxCount": 2002,
                    "minCount": 2001,
                    "startDate": "2015-11-15T08:42:13.661Z",
                    "endDate": "2016-10-30T08:45:13.661Z"
                }).end((err, res) => {
                    expect(res.status).to.be.equal(500)
                    expect(res.body.error).to.equal("endDate should be greater than startDate")
                    done();
                });
            

        });

        it('it should throw error if date is illegal', function(done) {
              chai.request(server)
                .post('/api/records').set('content-type', 'application/json')
                .send({
                    "maxCount": 2002,
                    "minCount": 2001,
                    "startDate": "2sss015-11-15T08:42:13.661Z",
                    "endDate": "2016-10-30T08:45:13.661Z"
                }).end((err, res) => {
                    expect(res.status).to.be.equal(400)
                    expect(res.body.error).to.equal("Invalid Date")

                    done();
                });

        });

    });
});