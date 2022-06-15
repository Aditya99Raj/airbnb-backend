const express = require('express');
const connect = require("./configs/db");
const app = express();
app.use(express.json());
const cors = require('cors');
require("dotenv").config();
app.use(cors())

const hotelController = require("./controllers/hotel.controller")

app.use("/hotel",hotelController)

const port = process.env.PORT || 3004;

app.listen(port,async () => {
    await connect();
    console.log('listening on port 3004')
})