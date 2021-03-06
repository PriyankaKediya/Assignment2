"use strict";
/*
Filename: index.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
//instantiate an object of type index controller
const index_1 = require("../Controllers/index");
/* GET home page. */
router.get('/', index_1.DisplayHomePage);
router.get('/edit/:id', index_1.EditPage);
router.post('/edit/:id', index_1.ProcessEditPage);
//////////////////////////
/* GET home page. */
router.get('/home', index_1.DisplayHomePage);
/* GET about page. */
router.get('/about', index_1.DisplayAboutPage);
/* GET projects page. */
router.get('/projects', index_1.DisplayProjectsPage);
/* GET services page. */
router.get('/services', index_1.DisplayServicesPage);
/* GET contact page. */
router.get('/contact', index_1.DisplayContactPage);
/* GET Business contacts page. */
router.get('/business-contacts', index_1.DisplayBusinessContactPage);
/*GET display login page */
router.get('/login', index_1.DisplayLoginPage);
/*POST process login page */
router.post('/login', index_1.ProcessLoginPage);
/*GET display register page */
router.get('/register', index_1.DisplayRegisterPage);
/*POST process login page */
router.post('/register', index_1.ProcessRegisterPage);
/*GET logout page */
router.get('/logout', index_1.ProcessLogoutPage);
/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', index_1.performDelete);
//module.exports = router;
//# sourceMappingURL=index.js.map