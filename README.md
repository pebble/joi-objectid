
# joi-objectid

A MongoDB ObjectId validator for Joi.

[![Build Status](https://magnum.travis-ci.com/pebble/joi-objectid.svg?token=2fGKDUnr1Num4uYLzNYp&branch=master)](https://magnum.travis-ci.com/pebble/joi-objectid)

## use

`joi-objectid` validates that the value is an alphanumeric string of 24 characters
in length.

It's used just like you'd use any other `Joi` type.

```js
var Joi = require('joi');
Joi.objectId = require('joi-objectid');

var schema = {
  id: Joi.objectId()
, name: Joi.string().max(100)
, date: Joi.date()
}

```

### Installation

```
npm install joi-objectid --save
```

### Development

#### running tests

- `make test` runs tests

## Sponsored by

[Pebble Technology!](https://getpebble.com)

## License

[MIT](https://github.com/pebble/joi-objectid/blob/master/LICENSE)
