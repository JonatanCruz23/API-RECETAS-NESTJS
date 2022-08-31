import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Model } from 'mongoose';

@Controller('ingrediente')
export class IngredienteController {
  constructor(private readonly ingredienteService: IngredienteService) {}

  @Post()
  create(@Res() res, @Body() createIngredienteDto: CreateIngredienteDto)  {
   const ingredienteCreado = this.ingredienteService.create(createIngredienteDto);
   res.json({
    mesage: 'usuario creado',
    ingredienteCreado
   })
  }

  @Get()
  findAll() {
    return this.ingredienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredienteDto: UpdateIngredienteDto) {
    return this.ingredienteService.update(+id, updateIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredienteService.remove(+id);
  }
}
