import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '@prisma/client';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  create(@Body() createUsuario: Usuario) {
    return this.usuarioService.create(createUsuario);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuario: Usuario) {
    return this.usuarioService.update({ where: { id: +id }, data: updateUsuario });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove({ id: +id });
  }
}
