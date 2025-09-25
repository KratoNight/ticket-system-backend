import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company) private companiesRepository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.companiesRepository.find();
  }

  findOne(id: number): Promise<Company | null> {
    return this.companiesRepository.findOneBy({ id });
  }
}
