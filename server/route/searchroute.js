const router = require('express').Router();
const Bus = require('../schema/busSchema');

router.route('/').post((req, res) => {
  Bus.find({ busStations: { $all: [req.body.from, req.body.to] } })
    .then((data) => {
      if (data.length > 0) res.json({ data: data });
      else res.json({ msg: 'length is less than 1' });
    })
    .catch((err) => res.json({ err: err }));
});

module.exports = router;
