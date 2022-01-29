const express = require("express");
const router = express.Router();
const Bus = require("../schema/busSchema");

router
  .route("/")
  .get((req, res) => {
      //console.log('getbus/ get request')
    Bus.find()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({
          msg: err
        });
      });
  })
  .post((req, res) => {
   // console.log(req.body);
    Bus.find({
      busNumber: req.body.busNumber
    })
      .then(result => res.json(result))
      .catch(err => res.json(err));
  });

module.exports = router;
