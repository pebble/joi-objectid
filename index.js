
var Joi = require('joi');

module.exports = function objectId() {
  return Joi.string().regex(/^[0-9a-fA-F]{24}$/);
};
