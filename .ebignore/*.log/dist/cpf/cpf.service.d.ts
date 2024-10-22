import { Repository } from 'typeorm';
import { Cpf } from './cpf.entity';
export declare class CpfService {
    private cpfRepository;
    constructor(cpfRepository: Repository<Cpf>);
    create(data: Partial<Cpf>): Promise<Cpf>;
    findByResponsible(responsavel: string): Promise<Cpf[]>;
}
