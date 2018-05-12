'use strict'

const canIUse = require('caniuse-api')

module.exports.getWarnings = function(properties, browsers) {
  let warnings = []
  
  properties.forEach((property) => {
    browsers.forEach((browser) => {
      try {
        if(!canIUse.isSupported(property, browser)) {
          warnings.push({ property: property, browser: browser })
        }
      } catch(err) {}
    })
  })
  
  return warnings
}
