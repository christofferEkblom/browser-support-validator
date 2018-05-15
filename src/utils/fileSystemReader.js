'use strict'

const filehound = require('filehound')
const fs = require('fs')

function readDirectoryContents(fileExtension, path) {
  let fileContents = []

  return new Promise(function (resolve, reject) {
    filehound.create()
      .ext(fileExtension)
      .paths(path)
      .find((err, files) => {
        if (!err) {
          files.forEach(file => {
            fileContents.push(fs.readFileAsync(file))
          })
        } else {
          reject(err)
        }
      }).then(() => {
        Promise.all(fileContents).then((fileContent) => {
          resolve(fileContent)
        })
      })
  })
}

fs.readFileAsync = function (filename) {
  return new Promise(function (resolve, reject) {
    try {
      fs.readFile(filename, 'utf8', function (err, buffer) {
        if (!err) {
          resolve(buffer)
        } else {
          reject(err)
        }
      })
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = {
  readDirectoryContents
}
