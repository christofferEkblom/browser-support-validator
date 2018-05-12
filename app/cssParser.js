'use strict'

const cssObj = require('css')

module.exports.getProperties = function(css, options) {
  let properties = []

  cssObj.parse(css)['stylesheet']['rules'].forEach((rule) => {
    rule['declarations'].forEach((declaration) => {
      let property = declaration['property']
      let optionsIsSet = typeof options !== 'undefined'
      let propertyIsUnique = properties.indexOf(property) === -1

      if(optionsIsSet && options['allowDuplicates'] || propertyIsUnique) {
        properties.push(property)
      }
    })
  })
  
  return properties
}
