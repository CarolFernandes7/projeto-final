import { CpfService } from './cpf.service';
import { Cpf } from './cpf.entity';
export declare class CpfController {
    private readonly cpfService;
    constructor(cpfService: CpfService);
    createCpf(createCpfDto: Partial<Cpf>): Promise<Cpf>;
    searchCpf(responsavel: string): Promise<Cpf[]>;
}
