// const express=require('express');
import express from 'express';
const app = express()
const port = 3000
app.get("/",(req,res) => {
    res.send("Welcome to cse c students");
});
app.get("/about",(req,res) => {
    res.send("Welcome to about page");
});
app.get("/api",(req,res) => {
    const {name , rollno } = req.query;
    res.send(`Welcome ${name} and your roll no. is ${rollno}`);
});
app.listen(port,() => {
    console.log('server running at http://localhost:${port}')
});