const chai = require('chai')
const sut = require('../app/cssParser')

let css = require('./css').css
let uniqueProperties = 5
let propertiesTotal = 6
let assert = chai.assert

describe('cssParser getProperties', () => {
  it('length should be 6 when duplicates are allowed', function() {
    let properties = sut.getProperties(css, {allowDuplicates: true})
    assert.equal(properties.length, propertiesTotal)
  })

  it('length should be 5 when duplicates are disallowed', function() {
    let properties = sut.getProperties(css, {allowDuplicates: false})
    assert.equal(properties.length, uniqueProperties)
  })

  it('should disallow duplicates by default if allowDuplicates option is not set', function() {
    let properties = sut.getProperties(css)
    assert.equal(properties.length, uniqueProperties)
  })
})
