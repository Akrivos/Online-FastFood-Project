require('dotenv').config()
const express = require("express");
const app = express();
const db = require("./db/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT;
const helmet = require('helmet')

app.use(
    cors({
        origin: [
            "http://localhost:3000"
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet())

//Import Routers
const CategoryRouter = require("./routers/CategoryRouter")
const OrderRouter = require("./routers/OrderRouter")
const ProductRouter = require("./routers/ProductRouter")
const ProductMaterialRouter = require("./routers/ProductMaterialRouter")
const UserRouter = require("./routers/UserRouter")

//Use Routers
app.use(CategoryRouter)
app.use(OrderRouter)
app.use(ProductRouter)
app.use(ProductMaterialRouter)
app.use(UserRouter)



app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is up on port ${PORT}`);
    }
});