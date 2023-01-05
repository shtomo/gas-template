# Google Apps Script Template with ESLint

This is template for beginning development with Google Apps Script.

## Description

This contains below.

- ESLint
- Prettier
- Type definitions [@types/google-apps-script](https://www.npmjs.com/package/@types/google-apps-script)
- `src/` that is directory for GAS code
- npm scripts for push to/pull from server

## Requirement

- [google/Clasp](https://github.com/google/clasp)

## Usage

1. Execute `$ npm install`.
2. Execute `$ npm init @eslint/config` and create .eslintrc.\* file (or create by yourself).
3. Fill the target ScriptId on `src/appsscript.json`.
4. (Optional) Add `.clasp.json` to `.gitignore` because of avoiding the ScriptId published.
5. Write Apps Script code.
6. Execute `$ clasp push`.
