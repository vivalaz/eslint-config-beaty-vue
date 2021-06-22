module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	extends: [
		"eslint:recommended",
		"plugin:nuxt/base",
		"plugin:vue/recommended",
		"prettier"
	],
	rules: {
		"comma-dangle": ["error", "never"],
		"no-console": "warn",
		"no-template-curly-in-string": "error",
		yoda: "error",
		curly: "error",
		"default-case": "error",
		"default-param-last": "error",
		eqeqeq: "error",
		"no-else-return": "error",
		"no-magic-numbers": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-return-await": "error",
		"require-await": "error",
		"no-use-before-define": "error",
		"array-bracket-newline": "error",
		"array-bracket-spacing": "error",
		"implicit-arrow-linebreak": "error",
		"arrow-body-style": ["error", "as-needed"],
		indent: ["error", "tab"],
		"max-len": "error",
		"multiline-ternary": "error",
		"no-duplicate-imports": "error"
	},
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 2021
	},
	globals: {
		$nuxt: true
	},
	plugins: ["import", "vue", "nuxt"]
};
