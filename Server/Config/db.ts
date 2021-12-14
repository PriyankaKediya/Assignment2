/* 
Filename: db.ts
Name: Priyanka Kediya
Id: 301184183
Date: 10 October, 2021
*/

export const LocalURI = "mongodb://localhost/contacts";

export let RemoteURI = "mongodb+srv://priyanka:WyVc4m0EkNidYbEe@comp229-f2021.r3dat.mongodb.net/store?retryWrites=true&w=majority";
//export const RemoteURI = process.env.RemoteURI;
export const HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
export const Secret = "someSecret";
//export const HostName = "localhost";