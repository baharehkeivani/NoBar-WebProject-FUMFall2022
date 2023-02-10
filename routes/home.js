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

// router.get('/pricing', function (req, res) {
//   res.render('home/pages/pricing.hbs', {
//     title: 'Home'
//   });
// });


// router.get('/pricing2', function (req, res) {
//   res.render('home/pages/pricing2.hbs', {
//     title: 'Home'
//   });
// });


// router.get('/tutorial', function (req, res) {
//   res.render('home/pages/tutorial.hbs', {
//     title: 'اموزش'
//   });
// });

// router.get('/services', function (req, res) {
//   res.render('home/pages/services.hbs', {
//     title: 'Home'
//   });
// });


// router.get('/serviceDetail/0', function (req, res) {
//   res.render('home/pages/serviceDetail.hbs', {
//     title: 'جزئیات سرویس پنل مدیریت '
//   });
// });

// router.get('/serviceDetail/1', function (req, res) {
//   res.render('home/pages/serviceDetail1.hbs', {
//     title: ' جزئیات سرویس اپلیکیشن اپراتور'
//   });
// });

// router.get('/serviceDetail/2', function (req, res) {
//   res.render('home/pages/serviceDetail2.hbs', {
//     title: ' جزئیات سرویس اپلیکیشن راننده'
//   });
// });

// router.get('/serviceDetail/3', function (req, res) {
//   res.render('home/pages/serviceDetail3.hbs', {
//     title: 'جزئیات سرویس اپلیکیشن اداری'
//   });
// });


// router.get('/serviceDetail/4', function (req, res) {
//   res.render('home/pages/serviceDetail4.hbs', {
//     title: 'جزئیات سرویس اپلیکیشن مدیریت'
//   });
// });

// router.get('/serviceDetail/5', function (req, res) {
//   res.render('home/pages/serviceDetail5.hbs', {
//     title: 'جزئیات پنل سیموتل'
//   });
// });





// router.get('/advice', function (req, res) {
//   res.render('home/pages/advice.hbs', {
//     title: 'Home'
//   });
// });

// router.get('/blogs/:categoryId', function (req, res) {
//   homeDb.getBlogs(req.params.categoryId, function (result) {
//     homeDb.getKeywords(1, function (pageInfo) {
//       res.render('home/pages/blogs.hbs', {
//         title: 'مقالات',
//         data: result,
//         description: pageInfo.description,
//         keywords: pageInfo.keywords,
//       });
//     })
//   }, function (err) {
//     console.log("error >> blogs", err);
//   })
// });

// router.get('/blogDetail/:id', function (req, res) {
//   homeDb.getBlogDetail(req.params.id, function (result) {
//     homeDb.getBlogCategory(0, function (category) {
//       homeDb.getBlogs(0, function (data) {
//         let blogs = data.filter(item => item.id != result.id);
//         res.render('home/pages/blogDetail.hbs', {
//           title: result.subject,
//           description: result.description,
//           keywords: result.keyword,
//           data: result,
//           categoryList: category,
//           latestBlog: blogs.slice(0, 4)
//         });
//       });
//     });
//   }, function (err) {
//     console.log("error >> getBlogDetail", err);
//   });
// });

// router.post('/advice', function (req, res) {
//   try {
//     let msg = `درخواست مشاوره. نام: ${req.body.name}, تلفن: ${req.body.mobile}`
//     util.sendSms("09154090164", msg)
//     req.flash("success_msg", "درخواست شما برای ما ارسال شد، خیلی زود با شما تماس می گیریم.")
//     res.redirect("/advice");
//   }
//   catch (err) {
//     console.log("err", err);
//     req.flash("error_msg", "متاسفیم! مشکلی پیش اومد. لطفا دوباره امتحان کنید.");
//     res.redirect("/advice");
//   };
// });

// router.get('/*', function (req, res) {
//   req.app.locals.layout = '';
//   res.render('home/404');
// });

// router.post('/*', function (req, res) {
//   req.app.locals.layout = '';
//   res.render('home/404');
// });



module.exports = router;