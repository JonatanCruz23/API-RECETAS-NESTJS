import { Controller, Get, Post, Body, Param, Delete, Res, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';


@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  async create(@Res() res, @Body() createUsuarioDto: CreateUsuarioDto) {
    const usuarioCreado = await this.usuarioService.create(createUsuarioDto);
    res.json({
      mesage: 'usuario creado',
      usuarioCreado
    })
  }

  @Get()
  async findAll(@Res() res) {
    const usuarios = await this.usuarioService.findAll();
    res.json({
      usuarios
    })
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const usuario = await this.usuarioService.findOne(id);
    res.json({
      usuario
    })
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioActualizado = await this.usuarioService.update(id, updateUsuarioDto);
    res.json({
      mensage: 'usuario actualizado',
      usuarioActualizado
    })
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const usuarioEliminado = await this.usuarioService.remove(id);
    res.json({
      usuarioEliminado
    })
  }
}
