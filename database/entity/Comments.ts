import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { IsString } from 'class-validator';
import { UserProfile } from './UserProfile';

// what is in a comment
// the post it belongs to
// the userprofule the comment belongs to
// there can be many comments on many posts
// comments are tied to 1 post, but there can by many posts

// many to many or one to many - answer one to may
// remove these comments when done

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  @IsString()
  text: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserProfile, (userprofile) => userprofile.comments)
  userProfileId: UserProfile;
}
