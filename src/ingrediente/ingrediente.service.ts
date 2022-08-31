import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente } from './interfaces/ingrediente.interface';

@Injectable()
export class IngredienteService {

  constructor(@InjectModel('Ingrediente') private ingredienteModel: Model<Ingrediente>){}
  
  async create(createIngredienteDto: CreateIngredienteDto): Promise<Ingrediente> {
    const crearIngrediente = new this.ingredienteModel(createIngredienteDto);
    return await crearIngrediente.save();
  }

  async findAll(): Promise<Ingrediente[]> {
   const ingredientes = await this.ingredienteModel.find()
   return ingredientes;
  }

  async findOne(id: string) {
   const unIngrediente = await this.ingredienteModel.findById(id)
   return unIngrediente
  }

  async update(id: string, updateIngredienteDto: UpdateIngredienteDto): Promise<Ingrediente> {
    const ingredienteActualizado = await this.ingredienteModel.findByIdAndUpdate(id, updateIngredienteDto);
    return ingredienteActualizado
  }

  async remove(id: string) {
    const ingredienteEliminado = await this.ingredienteModel.findByIdAndRemove(id)
    return ingredienteEliminado
  }
}
