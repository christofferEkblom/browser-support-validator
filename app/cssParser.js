'use strict'

const cssObj = require('css')

module.exports.getProperties = function(css, options) {
  let properties = []

  cssObj.parse(css)['stylesheet']['rules'].forEach((rule) => {
    rule['declarations'].forEach((declaration) => {
      let property = declaration['property']

      if(typeof options !== 'undefined' && options['allowDuplicates']) {
        properties.push(property)
      }

      else {
        if(properties.indexOf(property) === -1) {
          properties.push(property)
        }
      }
    })
  })
  
  return properties
}
