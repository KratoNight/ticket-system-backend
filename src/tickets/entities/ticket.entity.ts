import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  priority: string;

  @Column()
  status: string;

  @Column()
  type: string;

  @Column()
  tags: string;

  @CreateDateColumn()
  timeOpened: Date;
}
