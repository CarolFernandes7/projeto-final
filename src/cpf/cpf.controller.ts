import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CpfService } from './cpf.service';
import { Cpf } from './cpf.entity';

@Controller('cpf')
export class CpfController {
  constructor(private readonly cpfService: CpfService) {}

  @Get()
  findAll(): Promise<Cpf[]> {
    return this.cpfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cpf> {
    return this.cpfService.findOne(id);
  }

  @Post()
  create(@Body() cpf: Cpf): Promise<Cpf> {
    return this.cpfService.create(cpf);
  }

  @Get('search')
  findByFiliacao(@Param('nome') nome: string): Promise<Cpf[]> {
    return this.cpfService.findByFiliacao(nome);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cpf: Cpf): Promise<void> {
    return this.cpfService.update(id, cpf);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.cpfService.delete(id);
  }
}