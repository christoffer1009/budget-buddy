import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaDespesaController } from './categoria-despesa.controller';
import { CategoriaDespesaService } from './categoria-despesa.service';

describe('CategoriaDespesaController', () => {
  let controller: CategoriaDespesaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaDespesaController],
      providers: [CategoriaDespesaService],
    }).compile();

    controller = module.get<CategoriaDespesaController>(CategoriaDespesaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
