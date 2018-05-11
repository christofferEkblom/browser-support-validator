const chai = require('chai')
let assert = chai.assert
const sut = require('../app/cssParser')

let css = '\
  body {\
    color: #fff;\
    background: #000;\
  }\
  \
  div {\
    display: inline;\
    position: absolute;\
    color: #666;\
    non-existing-property: value;\
  }\
'

describe('cssParser getProperties', () => {
  it('length should be 6 when duplicates is allowed', function() {
    let properties = sut.getProperties(css, {allowDuplicates: true})
    assert.equal(properties.length, 6)
  })

  it('length should be 5 when duplicates is disallowed', function() {
    let properties = sut.getProperties(css, {allowDuplicates: false})
    assert.equal(properties.length, 5)
  })

  it('should disallow duplicates by default if allowDuplicates option is not set', function() {
    let properties = sut.getProperties(css)
    assert.equal(properties.length, 5)
  })
})
