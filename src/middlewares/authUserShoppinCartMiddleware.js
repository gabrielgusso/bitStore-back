import { shoppingCartSchema } from "../models/shoppingCartProductSchema.js";

export async function authUserShoppingCartMiddleware(req, res, next) {
    try {
        const product = req.body;
        

        const validate = await shoppingCartSchema.validateAsync(product, {abortEarly: false});
        console.log(validate);
    } catch (err) {
        res.send(err.details.map(d => d.message)).status(400);
    }
}
