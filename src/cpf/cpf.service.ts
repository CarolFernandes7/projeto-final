import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cpf } from './cpf.entity';

@Injectable()
export class CpfService {
  constructor(
    @InjectRepository(Cpf)
    private cpfRepository: Repository<Cpf>,
  ) {}

  async findAll(): Promise<Cpf[]> {
    return this.cpfRepository.find();
  }

  async findOne(id: number): Promise<Cpf> {
    return this.cpfRepository.findOne({ where: { id } });
  }

  async findByFiliacao(nome: string): Promise<Cpf[]> {
    return this.cpfRepository.createQueryBuilder('cpf')
      .where('cpf.filiacao LIKE :nome', { nome: `%${nome}%` })
      .getMany();
  }

  async create(cpf: Cpf): Promise<Cpf> {
    return this.cpfRepository.save(cpf);
  }

  async update(id: number, cpf: Cpf): Promise<void> {
    await this.cpfRepository.update(id, cpf);
  }

  async delete(id: number): Promise<void> {
    await this.cpfRepository.delete(id);
  }
}