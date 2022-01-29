const router = require("express").Router();
const Bus = require("../schema/busSchema");

router
  .route("/")
  .get((req, res) => {
    let arr = [];
    Bus.find({})
      .select("busStations -_id")
      .then((result) => {
        result.forEach((item, index) => {
          arr = [...arr, ...item.busStations];
        });
      })
      .catch((err) => {
        console.log(err);
        res.json({ err });
      })
      .finally(() => {
        arr = Array.from(new Set(arr));
        console.log(arr);
        res.json({ result: arr });
      });
  })
  .post((req, res) => {
    //  console.log('origin',req.headers.origin)
    // res.json({req});

    Bus.find({ busStations: req.body.busStation })
      .select("busNumber -_id")
      .then((result) => {
        // console.log(result)
        res.json({ result });
      })
      .catch((err) => {
        console.log(err);
      });
  });

module.exports = router;
