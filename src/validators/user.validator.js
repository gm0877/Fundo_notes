import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(7).required(),
    lastName: Joi.string().min(7).required(),
    email:Joi.string().min(10).required(),
    password:Joi.string().min(8).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};
