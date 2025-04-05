import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Post } from './Post';
import { PostImage } from './PostImages';
// import class validators later

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  displayname: string;

  @Column()
  bio: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToOne(() => User)
  @JoinColumn()
  userId: User;

  @OneToMany(() => Post, (post) => post.userProfileId)
  posts: Post[];

  @OneToMany(() => PostImage, (postimage) => postimage.userProfileId)
  images: PostImage[];
}
