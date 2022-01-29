const express = require('express');
const router = express.Router();
const Bus = require('../schema/busSchema');
const axios = require('axios');
const cheerio = require('cheerio');

router
  .route('/')
  .get((req, res) => {
    res.send('at bus ');
  })
  .post((req, res) => {
    if (req.headers.origin !== 'https://dtc-app.netlify.com') {
      console.log('inavlid', req.headers.origin);
      res.json({ msg: 'invalid' });
      return;
    }
    let msg = {};
    // console.log(req.body)
    const { busNumber } = req.body;

    const fetchdata = async () => {
      try {
        let result = await axios.get(
          `https://delhicitybus.in/route-no/${busNumber}/`
        );

        const $ = cheerio.load(result.data);
        let arr = [];

        let val = $('#onwards-route').next();
        val.find('tr').each((i, el) => {
          let va = $(el).children('td').first().next().text();
          arr.push(va);
        });
        arr.shift();

        new Bus({ busNumber: busNumber, busStations: arr }).save((err) => {
          if (err) {
            console.log(err);
            msg = {
              status: 'mongo error',
              error: err,
            };
          } else {
            msg = {
              status: 'saved',
            };
          }

          Bus.find({ busNumber: busNumber }).then((result) => {
            msg = {
              ...msg,
              result,
            };
            res.json(msg);
          });
        });
      } catch (error) {
        res.json({ status: 'catch error', err: error });
      }
    };
    fetchdata();
  });

module.exports = router;
