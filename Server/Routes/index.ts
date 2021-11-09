/* 
Filename: index.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/

import express from 'express';
const router = express.Router();
export default router;

//instantiate an object of type index controller
import {DisplayHomePage, DisplayAboutPage,DisplayLoginPage,ProcessLoginPage, DisplayRegisterPage, ProcessRegisterPage, ProcessLogoutPage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage, DisplayBusinessContactPage, EditPage, ProcessEditPage, performDelete} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

router.get('/edit/:id', EditPage);
router.post('/edit/:id', ProcessEditPage);
//////////////////////////
/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET Business contacts page. */
router.get('/business-contacts', DisplayBusinessContactPage);

/*GET display login page */
router.get('/login', DisplayLoginPage);

/*POST process login page */
router.post('/login', ProcessLoginPage);

/*GET display register page */
router.get('/register', DisplayRegisterPage);

/*POST process login page */
router.post('/register', ProcessRegisterPage);

/*GET logout page */
router.get('/logout',ProcessLogoutPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', performDelete);


//module.exports = router;
