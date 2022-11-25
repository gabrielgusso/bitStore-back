export async function shoppingCartProductsController(req, res) {
    try {
        console.log(req.product);
        
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(401);
    }
}