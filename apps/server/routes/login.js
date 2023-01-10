const express = require('express');
const router = express.Router();

/* GET login. */
router.post('/', function(req, res, next) {
  res.send('POST /login');
});

module.exports = router;
