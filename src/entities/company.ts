import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user';

// one to many relation to user table.

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @Column()
  companyName: string;

  @Column()
  companyEmail: string;

  @Column({ default: true })
  isActive: boolean;
}
