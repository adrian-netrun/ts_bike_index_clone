import 'reflect-metadata';
import * as fs from 'fs';
import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from '../database/data-source';
import users from './routes/users';
import profile from './controller/profile';

dotenv.config();

const imagePath = path.join(__dirname, 'images');

if (!fs.existsSync(imagePath)) {
  try {
    fs.mkdirSync(imagePath);
  } catch (error) {
    console.log('An error creating file for image storage:', error);
  }
} else {
  console.log('File already exists');
}

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', users);
app.use('/api', profile);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected correctly');
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) =>
    console.log('Database error, server crashed out \n', error),
  );
