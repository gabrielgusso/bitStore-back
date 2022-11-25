import express from "express"
import cors from "cors"
import { authRoute } from "./routes/authRoute.js"
import { productsRoute } from "./routes/productsRoute.js"
import { shoppingCart } from "./routes/shoppingCartRoute.js"
import { checkoutRoute } from "./routes/checkoutRoute.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(productsRoute)
app.use(authRoute)
app.use(shoppingCart)
app.use(checkoutRoute)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running in port: ${port}`))
