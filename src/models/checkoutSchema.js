import Joi from "joi"

export const checkoutSchema = Joi.object({
    paymentMethod: Joi.string().required().valid("pix", "cartao", "boleto")
})
