# Compare JSON keys

This module compares keys (_not_ values) of two JSON objects. It returns `true` if keys are the same, otherwise `false`.

## Install

```bash
npm install --save compare-json-keys
```

## Usage

```js
var compareJsonKeys = require('compare-json-keys');

var obj1 = { a: 1, b: 2 };
var obj2 = { b: 1, a: 2 };

console.log(compareJsonKeys(obj1, obj2));
```

And the output is:

```bash
true
```

## License

MIT © [Samir Djellil](http://samirdjellil.com)
