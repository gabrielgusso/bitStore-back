import Joi from "joi";

export const authSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.number().min(3).required(),
});
