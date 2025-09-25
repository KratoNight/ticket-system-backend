import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket) private ticketsRepository: Repository<Ticket>,
  ) {}

  findAll(): Promise<Ticket[]> {
    return this.ticketsRepository.find();
  }

  findOne(id: number): Promise<Ticket | null> {
    return this.ticketsRepository.findOneBy({ id });
  }
}
