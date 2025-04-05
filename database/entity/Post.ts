import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { IsString } from 'class-validator';
import { UserProfile } from './UserProfile';

export class Post {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  make: String;

  @Column()
  model: String;

  @Column()
  @IsString()
  serial: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  udpatedAt: Date;

  @ManyToOne(() => UserProfile, (userprofile) => userprofile.posts)
  userProfileId: UserProfile;
}
