import Joi from "joi";

export const shoppingCartSchema = Joi.object({
    category: Joi.string()
    .required()
    .valid(
      "processador",
      "placa-mae",
      "placa-de-video",
      "memoria-ram",
      "ssd-hd",
      "gabinete",
      "fonte"
    ),
  image: Joi.string().required(),
  price: Joi.string().required()
});