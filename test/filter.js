var should = requre(should)
var filter = require('../../app/filter')

describe('filter', function(){

	it('exist', function () {
		should.exist(filter)
	})

	it('is a function', function () {
		(typeof filter).should.eql('function')
	})

	it('returns an array', function () {
		var actual = filter()
		(typeof actual).should.req('array')
	})
})

/*

For testing go most simple to most complex;
- or things that are most wrong to most right;
- top of execution to the bottom

function filter(list, condition) {
	
}
*/