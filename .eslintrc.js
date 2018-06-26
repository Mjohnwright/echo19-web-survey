module.exports = {
  "env": {
    "node": true,
    "jest": true,
    "browser": true,
  },
  "globals": {
    "assert": "off",
    "mount": "off",
    "shallow": "off",
    "render": "off",
  },
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'rules': {
      // 'no-undef': 'off',
      // 'react/jsx-filename-extension': 'off',
      // 'no-console': 'off',
      // 'prefer-arrow-callback': 'off',
      // 'func-names': 'off',
    },
    "overrides": [
    {
      "files": [ "*.test.js", "*.test.jsx" ],
      "rules": {
        'no-console': 'off',
      }
    }
  ],
};
