#!/usr/bin/env node

//  SERVER TITLE
//  Author:  AUTHORS NAMES
//  Description:  WHAT DOES THIS PACKAGE DO
//  Version: 0.0.1
//
//  Notes:   Any notes we need to know about the server     

//  Install Instructions
//      npm install moment mysql express ejs ....  
//         OR Groups will get more credit if they use
//      npm install and npm start shortcuts and include a package.json file
//          - See https://docs.npmjs.com/creating-a-package-json-file


const express = require('express');
const mysql = require('./mysql');
const app = express();
const port = process.env.PORT;


app.get('/test', async (req,res) => {
    try {
        await mysql.query('SELECT *');
        res.send('successful');
    } catch (err) {
        res.status(404).send('failed');
    }

});

app.listen(port, () => {
    console.log('server is running');
})