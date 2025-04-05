import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './UserProfile';

@Entity()
export class PostImage {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  name: String; //randomly generated text

  @Column()
  filepath: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserProfile, (userprofile) => userprofile.images)
  userProfileId: UserProfile;
}
