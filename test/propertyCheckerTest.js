const chai = require('chai')
const sut = require('../app/propertyChecker')

let browsers = require('./browsers').browsers
let properties = require('./properties').properties
let assert = chai.assert

describe('canIUse getWarnings', () => {
  it('should get warnings correctly', function() {
    let expected = []

    expected.push({ property: 'border-radius', browser: 'safari 3.1' })
    expected.push({ property: 'border-radius', browser: 'ie 8' })
    expected.push({ property: 'border-image', browser: 'safari 3.1' })
    expected.push({ property: 'border-image', browser: 'ie 8' })

    let actual = sut.getWarnings(properties, browsers)

    for(let i = 0; i < expected.length; i++) {
      assert.equal(expected[i]['property'], actual[i]['property'])
      assert.equal(expected[i]['browser'], actual[i]['browser'])
    }
  })
})
