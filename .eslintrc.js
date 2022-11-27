module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",  //Can add popular linting rules such as airbnb, amazon
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {  //defining rules here will override with predefined rules
        "react/react-in-jsx-scope" : "warn" //off, warn, error
    },
    "settings" : {
        "react" : {
            "version" : "^17.0.1"
        }
    }
}
