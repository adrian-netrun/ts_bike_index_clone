import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_name,
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
