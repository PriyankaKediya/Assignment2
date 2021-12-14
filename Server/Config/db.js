"use strict";
/*
Filename: db.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
exports.LocalURI = "mongodb://localhost/contacts";
exports.RemoteURI = "mongodb+srv://priyanka:WyVc4m0EkNidYbEe@comp229-f2021.r3dat.mongodb.net/store?retryWrites=true&w=majority";
//export const RemoteURI = process.env.RemoteURI;
exports.HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
exports.Secret = "someSecret";
//export const HostName = "localhost";
//# sourceMappingURL=db.js.map