/* 
Filename: business-contacts.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose schema

const BusinessContactsSchema = new Schema
({
    contactName: String,
    contactNumber: String,
    emailAddress: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("BusinessContacts", BusinessContactsSchema);
export default Model;