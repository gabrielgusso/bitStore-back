import Joi from "joi";

export const shoppingCartSchema = Joi.object({
  idProduct: Joi.required(),
  idUser: Joi.required(),
  price: Joi.required()
});