// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"
import express, {json,Request,  Response} from 'express';
import session from 'express-session';
import {config} from "./config"
import { AppDataSource } from './data-source';
import { User } from './entity/User';

export const app = express();
app.use(
    session({
      secret: process.env.SECRET || '^@@#!$$gachon#@$$#',
      resave: false,
      saveUninitialized: true,
    }),
  );
  app.get('/', (req: Request, res: Response) => {
    res.send({
      msg: 'Hello, World!',
    });
  });




const  main =async ()=>{
    await AppDataSource.initialize()
    
    app.listen(config.port, (): void => {
        console.log('G_Rank_storage is Listening...');
      });
}
main().catch(error => console.log(error))
