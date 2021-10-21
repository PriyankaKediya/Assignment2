"use strict";
/* 
Filename: index.js
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

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
});
/* GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
});
/*GET games list */
router.get('/games-list', function (req, res, next) {
    //db.games.find
    game_1.default.find((err, gamesCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log(gamesCollection);
    });
});
//module.exports = router;
//# sourceMappingURL=index.js.map