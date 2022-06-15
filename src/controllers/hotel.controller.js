const express = require('express');
const router = express.Router();
const hotel = require("../models/hotel.model");


router.post("/", async (req, res) => {
    const hoteldata = await hotel.create(req.body);
    return res.status(200).send(hoteldata)
});


router.get("/", async (req, res) => {
    const hoteldata = await hotel.find().lean().exec();
    return res.status(200).send(hoteldata)
});

router.get("/:id", async (req, res) => {
    const hoteldata = await hotel.findById(req.params.id);
    return res.status(200).send(hoteldata)
});

module.exports = router
