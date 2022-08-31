import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './interface/usuario.interfece';

@Injectable()
export class UsuarioService {

  constructor(@InjectModel('Usuario') private usuarioModel: Model<Usuario>){}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const crearUsuario = new this.usuarioModel(createUsuarioDto)
    return  await crearUsuario.save();
 
  }

  async findAll(): Promise<Usuario[]> {
    const usuarios = await this.usuarioModel.find()
    return usuarios;
  }

  async findOne(id: string): Promise<Usuario> {
   const unUsuario = await this.usuarioModel.findById(id)
   return unUsuario
  }

 async update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuarioActualizado = await this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto, { new: true });
    return usuarioActualizado;
  }

  async remove(id: string): Promise<Usuario> {
   const usuarioEliminado = await this.usuarioModel.findByIdAndRemove(id)
   return usuarioEliminado
  }
}
