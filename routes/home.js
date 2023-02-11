var express = require('express');
var router = express.Router();
const path = require('path');
// var util = require('../app/util');
// var homeDb = require('../database/homeDb');
// const axios = require('axios').default;



router.get('/', function (req, res) {
  res.redirect('/home');
});

router.get('/home', function (req, res) {
    // res.sendFile(path.join(__dirname+'/index.html'))
    res.render('index.ejs', {
        title: 'نوبار'
    });
});

router.get('/login', function (req, res) {
    res.render('login.ejs', {
    title: 'ورود'
    });
});

router.get('/driverProfile', function (req, res) {
    res.render('profile-driver.ejs', {
    title: 'پروفایل'
    });
});

router.get('/userProfile', function (req, res) {
    res.render('profile-user.ejs', {
      title: 'پروفایل'
    });
});

router.get('/userDashboard', function (req, res) {
    res.render('dashboard-user.ejs', {
      title: 'داشبورد'
    });
});

router.get('/driverDashboard', function (req, res) {
    res.render('dashboard-driver.ejs', {
      title: 'داشبورد'
    });
});

router.get('/adminDashboard', function (req, res) {
  res.render('dashboard-admin.ejs', {
    title: 'داشبورد'
  });
});

module.exports = router;