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
        "no-magic-numbers": ["error", {
            "ignore": [0, 1],
            "ignoreArrayIndexes": true,
            "ignoreDefaultValues": true
        }],
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
        "max-len": ["error", 120],
        "no-duplicate-imports": "error",
        "quotes": ["error", "single", {"allowTemplateLiterals": true}],
        "vue/comment-directive": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": "error",
        "keyword-spacing": "error",
        "no-trailing-spaces": "error",
        "padding-line-between-statements": [
            'error',
            { "blankLine": "always", "prev": "import", "next": "*" },
            { "blankLine": "never", "prev": "import", "next": "import" },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                "max": 3, "maxEOF": 1, "maxBOF": 0
            },
        ]
    },
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2021
    },
    globals: {
        $nuxt: true
    },
    plugins: ["import", "vue", "nuxt"],
    ignorePatterns: [".eslintrc.js"]
};
