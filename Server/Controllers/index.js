/* 
Filename: index.js
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/


"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performDelete = exports.ProcessLogoutPage = exports.ProcessRegisterPage = exports.DisplayRegisterPage = exports.ProcessLoginPage = exports.DisplayLoginPage = exports.DisplayBusinessContactPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = exports.ProcessEditPage = exports.EditPage = void 0;
const passport_1 = __importDefault(require("passport"));
// create an instance of the user model
const user_1 = __importDefault(require("../Models/user"));
//get a reference to the Business Contacts Model Class
const business_contacts_1 = __importDefault(require("../Models/business-contacts"));
function EditPage(req, res, next) {
    let id = req.params.id;
    business_contacts_1.default.findById(id, (err, contacts) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('index', { title: 'Edit Contacts', contacts: contacts, page: 'edit' });
        }
    });
}
exports.EditPage = EditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new business_contacts_1.default({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    business_contacts_1.default.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/business-contacts');
        }
    });
}
exports.ProcessEditPage = ProcessEditPage;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayBusinessContactPage(req, res, next) {
    business_contacts_1.default.find((err, contactsCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contacts',
            page: 'business-contacts',
            businessContacts: contactsCollection
        });
    });
}
exports.DisplayBusinessContactPage = DisplayBusinessContactPage;
/* functions for authentication */
function DisplayLoginPage(req, res, next) {
    res.render('index', { title: 'Login', page: 'login' });
}
exports.DisplayLoginPage = DisplayLoginPage;
function ProcessLoginPage(req, res, next) {
    passport_1.default.authenticate('local', (err, user, info) => {
        //are there any server errors?
        if (err) {
            console.error(err);
            return next(err);
        }
        //are there any login errors?
        if (!user) {
            req.flash('loginMessage', 'User already exists');
            return res.redirect('./login');
        }
        req.login(user, (err) => {
            //are there any db errors?
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.redirect('/business-contacts');
        });
    })(req, res, next);
}
exports.ProcessLoginPage = ProcessLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render('index', { title: 'Register', page: 'register' });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function ProcessRegisterPage(req, res, next) {
    //instantiate a new user object
    let newUser = new user_1.default({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });
    console.log(newUser);
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');
            return res.redirect('/register');
        }
        //after successful registration - let's login the user
        return passport_1.default.authenticate('local')(req, res, () => {
            return res.redirect('/business-contacts');
        });
    });
}
exports.ProcessRegisterPage = ProcessRegisterPage;
function ProcessLogoutPage(req, res, next) {
    req.logout();
    res.redirect('/login');
}
exports.ProcessLogoutPage = ProcessLogoutPage;
//////////////////////////////////////////////////////////////////
function performDelete(req, res, next) {
    let id = req.params.id;
    business_contacts_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/business-contacts');
        }
    });
}
exports.performDelete = performDelete;
//# sourceMappingURL=index.js.map