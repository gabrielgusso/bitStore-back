import Joi from "joi";

export const authSignUpSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
});

export const authSignInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required()
}); 