const express = require('express');
const router = express.Router();

/* GET user listing. */
router.get('/', function(req, res, next) {
  res.send('NOT IMPLEMENTED');
});

router.delete('/' ,function(req, res, next) {
  res.send('NOT IMPLEMENTED')
})

module.exports = router;
