import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Put } from '@nestjs/common';
import { IngredienteService } from './ingrediente.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Model } from 'mongoose';

@Controller('ingrediente')
export class IngredienteController {
  constructor(private readonly ingredienteService: IngredienteService) {}

  @Post()
  async create(@Res() res, @Body() createIngredienteDto: CreateIngredienteDto)  {
   const ingredienteCreado = await this.ingredienteService.create(createIngredienteDto);
   res.json({
    mesage: 'Ingrediente creado',
    ingredienteCreado
   })
  }

  @Get()
  async findAll(@Res() res) {
    const ingredientes = await this.ingredienteService.findAll();
    res.json({
      ingredientes
    })
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const unIngrediente = await this.ingredienteService.findOne(id);
    res.json({
      unIngrediente
    })
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updateIngredienteDto: UpdateIngredienteDto) {
    const ingredienteActualizado = await this.ingredienteService.update(id, updateIngredienteDto);
    res.json({
      ingredienteActualizado
    })
  }

  @Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    const ingredienteEliminado = await this.ingredienteService.remove(id);
    res.json({
      ingredienteEliminado
    })
  }
}
