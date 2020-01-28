# Script Case [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/script-case/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/script-case)

Make text superscript or subscript.

[![NPM Badge](https://nodei.co/npm/script-case.png)](https://npmjs.com/package/script-case)

## Install

```sh
npm install script-case
```

## Usage

```js
const scriptCase = require("script-case");

scriptCase.superscript("hello world");
//=> 'ʰᵉˡˡᵒ ʷᵒʳˡᵈ'

scriptCase.subscript("hello world")
//=> 'ₕₑₗₗₒ wₒᵣₗd'
```

You can also get the internal conversion dictionaries:

```js
const superscript = require("script-case/superscript")
//=> { "0": "⁰", "1": "¹", ... }

const subscript = require("script-case/subscript")
//=> { "0": "₀", "1": "₁", ... }
```

## API

### scriptCase.superscript(input)

#### input

Type: `string`

The string to convert.

### scriptCase.subscript(input)

#### input

Type: `string`

The string to convert.
