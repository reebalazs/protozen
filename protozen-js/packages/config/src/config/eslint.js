module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "modules": true
    },
    "extends": [
      "plugin:flowtype/recommended",
      'plugin:react/recommended'
    ],
  },
  "plugins": [
    "flowtype",
    "react"
   ],
  "rules": {
    "strict": 0,
    "no-unused-vars": [1, {
      "vars": "all",
      "varsIgnorePattern": "debug|info",
      "args": "none"
    }],
    "no-undef": 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1
  },
  "globals": {
    "Promise": true,
    "Symbol": true,
    "Set": true,
    "Map": true,
    "Uint8Array": true,
    "require": true,
    "module": true,
    "__dirname": true,
    "process": true,
    "global": true,
    "setTimeout": true,
    "clearTimeout": true,
    "setInterval": true,
    "clearInterval": true,
    "Buffer": true,
    "window": true,
    "console": true,
    "navigator": true,
    "document": true,
    "location": true,
    "confirm": true,
    "Event": true,
    "Intl": true,
    "alert": true
  }
}