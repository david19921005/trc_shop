var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/order/store', function(req, res, next) {
  console.log(req.session);
//   res.send('respond with a resource');
});


module.exports = router;
