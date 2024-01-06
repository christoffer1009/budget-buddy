import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaDespesaService } from './categoria-despesa.service';
import { CreateCategoriaDespesaDto } from './dto/create-categoria-despesa.dto';
import { UpdateCategoriaDespesaDto } from './dto/update-categoria-despesa.dto';

@Controller('categoria-despesa')
export class CategoriaDespesaController {
  constructor(private readonly categoriaDespesaService: CategoriaDespesaService) {}

  @Post()
  create(@Body() createCategoriaDespesaDto: CreateCategoriaDespesaDto) {
    return this.categoriaDespesaService.create(createCategoriaDespesaDto);
  }

  @Get()
  findAll() {
    return this.categoriaDespesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaDespesaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaDespesaDto: UpdateCategoriaDespesaDto) {
    return this.categoriaDespesaService.update(+id, updateCategoriaDespesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaDespesaService.remove(+id);
  }
}
