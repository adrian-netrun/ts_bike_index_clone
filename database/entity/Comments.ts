import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { UserProfile } from './UserProfile';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  text: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserProfile, (userprofile) => userprofile.comments)
  userProfileId: UserProfile;
}
