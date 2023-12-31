import { IsNumberString, IsOptional, IsString, validateSync } from 'class-validator';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { parse } from 'dotenv';
import dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import { User } from './entity/User';

const fileName = 'src/bot.env'
if (existsSync(fileName))
    dotenv.config({path:fileName});
else
    dotenv.config();
  


export const dataSourceOption: DataSourceOptions = {
      type: 'mysql',
      host: process.env.dbHost || 'localhost',
      port: parseInt(process.env.DB_PORT!!)|| 3306,
      username: process.env.dbUsername||'TEST',
      database: process.env.dbName||'TEST',
      password: process.env.dbPWD ||'test1234',
      synchronize: false,
      logging: false,
      entities: [User],
      migrations: ['./migration/*.ts', './migration/*.js'],
      subscribers: ['./subscriber/*.ts', './subscriber/*.js'],
      ssl: false,
      extra: {
          insecureAuth: true,
          ssl: {
              rejectUnauthorized: false,
          },
      },
  };

export class Config {
  public readonly port: string = process.env.PORT || '9080';
  public readonly host: string = process.env.HOST || 'localhost';

}
export const config = new Config();