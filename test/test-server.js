const mocha = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')

const expect = chai.expect

const {app,runServer,closeServer} = require('../server')

chai.use(chaiHttp)


describe('Root test', function () {

    before(function () {
        return runServer()
    })

    after(function(){
        return closeServer()
    })


    it('should serve an HTML page and return a 200 status code', function(){

        return chai.request(app)
        .get('/')
        .then(res => {
            expect(res).status(200)
            expect(res).to.be.html
        })
    })
})
