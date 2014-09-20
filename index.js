
var Joi = require('joi');

module.exports = function objectId() {
  return Joi.string().alphanum().length(24);
}
