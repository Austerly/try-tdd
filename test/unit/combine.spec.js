var should = require('should')
var combine = require('../../app/combine')

describe('combine', function () {

  it('exists', function () {
    should.exist(combine)
  })

  it('is a function', function () {
  	(typeof combine).should.eql('function')
  })

  it('returns data', function () {
  	combine.length.should.eql(1)
  })
})