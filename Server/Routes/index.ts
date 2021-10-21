/* 
Filename: index.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/

import express from 'express';
const router = express.Router();
export default router;



/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Me', page: 'about'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Services', page: 'services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Me', page: 'contact' });
});



//module.exports = router;
