![CI](https://github.com/JuliaYa/js_kata/workflows/CI/badge.svg?branch=master)

This repository just keeps my js solutions for katas from [Codewars](https://www.codewars.com/)

## What I learn while solving katas:

* how to use Set (new data object in JS) [link to article](https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c)

#### UPD from May 29 2025
* write tests with [chai](https://www.chaijs.com/)

* Eslint config moved from 'eslintrc.json' to 'eslint.config.js'

* new file extensions .cjs and .mjs

CommonJS (CJS) is a module system for JavaScript, primarily used in server-side environments like Node.js. It treats each file as a separate module, allowing you to import/export functionality between files using require and module.exports. 
Here's a breakdown:
Key Features:
Synchronous Loading: CJS uses synchronous loading, meaning modules are loaded in the order they are required.
require(): This function is used to import modules.
module.exports: This object is used to export values from a module.
File Extension: Typically found in files with the .js extension.
Usage: Common in Node.js applications and other server-side JavaScript environments. 
Example:
JavaScript

// moduleA.js
module.exports = {
  myFunction: function() {
    console.log("Hello from moduleA!");
  }
};

// main.js
const moduleA = require('./moduleA');
moduleA.myFunction(); // Output: Hello from moduleA!
CommonJS vs. ES Modules (ESM):
CommonJS: Older system, primarily server-side, synchronous loading.
ES Modules: Newer standard, can be used in browsers and server-side, asynchronous loading.
File Extensions:
.js: Can be CommonJS or ES Modules, depending on the package.json file and the context.
.cjs: Explicitly indicates a CommonJS module.
.mjs: Explicitly indicates an ES Module.
Note: Node.js still uses CommonJS as its default module system, but ESM is increasingly used in new projects.