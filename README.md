Google Apps Script Template with Standard Style
====
This is template for beginning development with Google Apps Script.

## Description
This contains below.
- ESLint with JS Standard Style
- Prettier
- Type definitions [@types/google-apps-script](https://www.npmjs.com/package/@types/google-apps-script)
- `src/` that is directory for GAS code
- `.node-version`
- npm script for push to/pull from server

## Requirement
- [google/Clasp](https://github.com/google/clasp)

## Usage
1. Execute `$ npm install`.
2. Fill the target ScriptId on `src/appsscript.json`.
3. (Optional) Add `.clasp.json` to `.gitignore` because of avoiding the ScriptId published. 
4. Write Apps Script code.
5. Execute `$ clasp push`.
