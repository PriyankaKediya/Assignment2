"use strict";
/*
Filename: business-contacts.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; //alias for mongoose schema
const BusinessContactsSchema = new Schema({
    contactName: String,
    contactNumber: String,
    emailAddress: String
}, {
    collection: "contacts"
});
const Model = mongoose_1.default.model("BusinessContacts", BusinessContactsSchema);
exports.default = Model;
//# sourceMappingURL=business-contacts.js.map