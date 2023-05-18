var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/','/index'], function(req, res, next) {
  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();
  res.render('index', { title: 'TEST node',});
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: '登入'});
});

router.get('/catalog', function(req, res, next) {
  console.log(req.query);
  if(!req.query || Object.keys(req.query).length === 0){
    console.log('No query')
  }
  res.render('catalog', { title: '產品目錄' });
 });

router.get('/detail', function(req, res, next) {
  console.log(req.query);
  if(!req.query || Object.keys(req.query).length === 0){
    console.log('No query')
  }
  res.render('detail', { title: '商品' });
 });

//  router.post('/test', function(req, res, next) {
//   console.log(req.body);
  
//  });

module.exports = router;
