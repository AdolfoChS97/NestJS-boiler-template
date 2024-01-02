import * as Joi from 'joi';

export const setupSchema = Joi.object({
  APP_PORT: Joi.number().integer().default(3000).required().messages({
    'number.base': `PORT must be a number`,
    'number.integer': `PORT must be an integer`,
    'any.required': `PORT is required`,
  }),
});