import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserProfile } from './UserProfile';

export class ProfilePicture {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  filepath: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => UserProfile)
  @JoinColumn()
  userProfile: UserProfile;
}
