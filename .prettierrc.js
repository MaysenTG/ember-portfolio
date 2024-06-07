'use strict'

module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
}
