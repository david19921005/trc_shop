var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/','/index'], function(req, res, next) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  res.render('index', { title: 'TEST node',currentYear: currentYear,footerTitle:'賣到併棒叫小舖' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login'});
});

module.exports = router;
