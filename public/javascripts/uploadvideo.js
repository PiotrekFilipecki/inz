var express = require('express');
var multer  = require('multer');
var router = express.Router();
var upload = multer({ dest: 'uploads/' });

router.post('/uploadvideo',upload.any(), function(req, res, next) {
  res.send(req.files);
  alert('dads');
});