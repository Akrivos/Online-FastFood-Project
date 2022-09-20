const express = require("express");
const app = express();
const db = require("./db/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = proccess.env.PORT;


app.use(
    cors({
        origin: [
            "http://localhost:3000"
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is up on port ${PORT}`);
    }
});