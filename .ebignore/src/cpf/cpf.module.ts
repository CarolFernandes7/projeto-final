import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cpf } from './cpf.entity';
import { CpfService } from './cpf.service';
import { CpfController } from './cpf.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cpf])],
  controllers: [CpfController],
  providers: [CpfService],
})
export class CpfModule {}