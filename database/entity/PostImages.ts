import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './UserProfile';

export class PostImage {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  name: String; //randomly generated text

  @ManyToOne(() => UserProfile, (userprofile) => userprofile.images)
  userProfileId: UserProfile;
}
