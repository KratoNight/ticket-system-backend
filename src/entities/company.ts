import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// one to many relation to user table.

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  companyEmail: string;

  @Column()
  isActive: boolean;
}
