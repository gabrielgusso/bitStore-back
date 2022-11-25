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
  name: Joi.string().min(3).required(),
  image: Joi.string().required(),
  price: Joi.string().required()
});