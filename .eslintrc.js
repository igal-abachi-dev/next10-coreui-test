module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",
        "camelcase": "off",
        "no-tabs": "off",
        "no-unreachable": "warn",
        "import/extensions": "warn",
        "eqeqeq": "warn",
        "no-underscore-dangle": "off",
        "import/no-unresolved": "off",
        "no-use-before-define": "warn",
        "no-param-reassign": "off",
        "prefer-const": "warn",
        "max-len": "warn",
        "react/jsx-props-no-spreading": "off",
        "react/prop-types": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ]
    }
};
