import "reflect-metadata"
import { DataSource } from "typeorm"
import { dataSourceOption } from './config';

export const AppDataSource = new DataSource(dataSourceOption)
