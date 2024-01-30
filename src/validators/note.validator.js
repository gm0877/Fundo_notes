import Joi from '@hapi/joi';

export const newNoteValidator = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(6).required(),
    description: Joi.string().min(7).required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};
