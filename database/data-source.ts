import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { UserProfile } from './entity/UserProfile';
import { ProfilePicture } from './entity/ProfilePicture';
import { Post } from './entity/Post';
import { PostImage } from './entity/PostImages';
import { Comment } from './entity/Comments';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_name,
  synchronize: true,
  logging: false,
  entities: [User, UserProfile, ProfilePicture, Post, PostImage, Comment],
  migrations: [],
  subscribers: [],
});
