import 'reflect-metadata';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ unique: true })
  username: String;

  @Column()
  hashedPassword: String;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
