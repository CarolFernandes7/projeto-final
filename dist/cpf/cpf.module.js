"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cpf_service_1 = require("./cpf.service");
const cpf_controller_1 = require("./cpf.controller");
const cpf_entity_1 = require("./cpf.entity");
let CpfModule = class CpfModule {
};
exports.CpfModule = CpfModule;
exports.CpfModule = CpfModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cpf_entity_1.Cpf])],
        providers: [cpf_service_1.CpfService],
        controllers: [cpf_controller_1.CpfController],
    })
], CpfModule);
//# sourceMappingURL=cpf.module.js.map