'use strict'

const canIUse = require('caniuse-api')

/**
  * @brief  get all compatibility warnings
  * @param properties: an array of css properties
  * @param browsers: an array of browsers
  * @return array of warnings
*/
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
