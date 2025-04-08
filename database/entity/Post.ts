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
import { UserProfile } from './UserProfile';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  make: String;

  @Column()
  model: String;

  @Column()
  serial: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  udpatedAt: Date;

  @ManyToOne(() => UserProfile, (userprofile) => userprofile.posts)
  userProfileId: UserProfile;
}
