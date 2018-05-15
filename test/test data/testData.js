module.exports = {
  js: [
    'function testFile() {\n  let message = \'This code is not intended to be executed\'\n  alert(message);\n}\n',
    'console.log(\'This file is either not intended to be executed\')\n'
  ],
  css: '\
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
  ',

  css2: [
    '/* css file 1 */\nhtml {\n  color: #f00;\n}\n',
    '/* css file 2 */\nbody {\n  background: #0f0;\n}\n'
  ],

  css_js: [
    '/* css file 1 */\nhtml {\n  color: #f00;\n}\n',
    'function testFile() {\n  let message = \'This code is not intended to be executed\'\n  alert(message);\n}\n',
    '/* css file 2 */\nbody {\n  background: #0f0;\n}\n',
    'console.log(\'This file is either not intended to be executed\')\n'
  ],

  properties: [
    'border-radius', 'border-image', 'color'
  ],

  browsers: [
    'safari 3.1', 'ie 8'
  ]
}
