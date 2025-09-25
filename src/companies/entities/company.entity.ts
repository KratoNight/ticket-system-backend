import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany('User', 'company')
  users: any[];

  @Column()
  companyName: string;

  @Column()
  companyEmail: string;

  @Column({ default: true })
  isActive: boolean;
}
