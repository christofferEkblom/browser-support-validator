module.exports = {
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
  ]
}
