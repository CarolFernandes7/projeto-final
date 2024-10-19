import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cpf_table') // Nome da tabela no banco de dados
export class Cpf {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column("text", { array: true })
    filiacao: string[];

    @Column()
    cpf: string;
}