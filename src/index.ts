import express, { Application, Request, Response, NextFunction } from 'express';
import Router from './routes';

const App: Application = express();

App.use(Router);

App.listen(3000,() => {
    console.log('Example app listening on port 3000!')
});