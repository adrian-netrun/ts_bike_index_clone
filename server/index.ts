import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from '../database/data-source';
import users from './routes/users';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', users);

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
