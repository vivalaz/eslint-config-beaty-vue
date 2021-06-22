# Eslint config for Vue/Nuxt
[![license](https://img.shields.io/github/license/tclindner/eslint-config-vue-tc.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/eslint-config-vue-tc/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/eslint-config-vue-tc.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/eslint-config-vue-tc)

## Getting started

```npm i --save-dev eslint-config-beaty-vue```

## Usage

Add the following to your `.eslintrc.*` file:

```json
{
  "extends": [
    "eslint-config-beaty-vue"
  ]
}
```

If you need to override a rule, in your `.eslintrc.*` add `rules` key and add custom rules. For example, we override `no-console` rule to disabled `console` usage.
```json
{
  "extends": [
    "eslint-config-beaty-vue"
  ],
  "rules": {
    "no-console": "error"
  }
}
```

## License

Please see the [LICENSE](LICENSE) file for more information.


