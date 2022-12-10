import express, { Application, Request, Response, NextFunction } from 'express';

const Router:Application=express();

Router.get('/',(req:Request, res:Response)=>{
    res.send('Hello World');
});

Router.get('/makan',(req:Request, res:Response)=>{
    res.send('Hello World');
});


export default Router;