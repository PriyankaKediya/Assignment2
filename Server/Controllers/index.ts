/* 
Filename: index.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/

import express, {Request, Response, NextFunction} from 'express';

import passport from 'passport';
import { UserDisplayName } from "../Util";
// create an instance of the user model
import User from '../Models/user';

//get a reference to the Business Contacts Model Class
import BusinessContacts from '../Models/business-contacts';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Home', page: 'home',displayName: UserDisplayName(req)});
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'About Me', page: 'about',displayName: UserDisplayName(req)});
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Projects', page: 'projects',displayName: UserDisplayName(req) });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Services', page: 'services',displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Contact Me', page: 'contact',displayName: UserDisplayName(req) });
}

export function DisplayBusinessContactPage(req: Request, res: Response, next: NextFunction)
{    
    BusinessContacts.find((err, contactsCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
      
        res.render('index', 
        { title: 'Business Contacts', 
        page: 'business-contacts',
        businessContacts: contactsCollection,
        displayName: UserDisplayName(req)
        });
    });     
}

/* functions for authentication */

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Login', page: 'login',displayName: UserDisplayName(req)});
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err, user, info) =>
    {
        //are there any server errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        //are there any login errors?
        if(!user)
        {
            req.flash('loginMessage', 'User already exists');
            return res.redirect('./login');
        }

        req.login(user, (err) =>
        {
            //are there any db errors?
            if(err)
            {
                console.error(err);
                return next(err);
            }

            return res.redirect('/business-contacts');
        });
    }) (req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Register', page: 'register',displayName: UserDisplayName(req)});
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    //instantiate a new user object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });

    console.log(newUser);

    User.register(newUser, req.body.password, (err) =>
    {
        if(err)
        {
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
        }

        //after successful registration - let's login the user
        return passport.authenticate('local')(req,res, () =>
        {
            return res.redirect('/business-contacts');
        })

    })
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction)
{
    req.logout();
    res.redirect('/login');
}



export function EditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    BusinessContacts.findById(id, (err: any, contacts: any) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('index', { title: 'Edit Contacts', contacts: contacts,  page : 'edit',displayName: UserDisplayName(req)});
        }        
    });    
}

export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    let updatedContact = new BusinessContacts({
        "_id" : id,
        "contactName" : req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress        
    });

    BusinessContacts.updateOne({_id : id}, updatedContact, (err: any) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/business-contacts');
        }
    });
}


export function performDelete(req: Request, res: Response, next: NextFunction)
{
    let id = req.params.id;
    
    BusinessContacts.remove({_id: id}, (err) =>
    {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             res.redirect('/business-contacts');
        }
    });
}




