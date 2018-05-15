const chai = require('chai')
const sut = require('../src/utils/fileSystemReader')
let testData = require('./test data')
let assert = chai.assert

describe('fileSystemReader readDirectoryContents', () => {
  it('should read css files data from a given directory including sub directories and return it as an array', done => {
    check('css', testData.css2, done)
  })

  it('should read js files data from a given directory including sub directories and return it as an array', done => {
    check('js', testData.js, done)
  })

  it('should support multiple file extensions', done => {
    check(['js', 'css'], testData.css_js, done)
  })
})

function check(extension, expected, done) {
  let dir = __dirname + '/test data/file sytem test files'
  let result = sut.readDirectoryContents(extension, dir)

  result.then((actual) => {
    try {
      assert.deepEqual(expected, actual)
      done()
    } catch (err) {
      done(err)
    }
  })
}
