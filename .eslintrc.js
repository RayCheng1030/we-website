module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

        "no-constant-condition": ["error", { "checkLoops": false }],
        "no-empty": ["warn", { "allowEmptyCatch": true }],
        "no-irregular-whitespace": "off",
        "max-len": ["warn", { "code": 240, "tabWidth": 4 }],
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};
