import { CreateIngredienteDto } from "src/ingrediente/dto/create-ingrediente.dto";

export class CreateRecetaDto {
    nombre:       string;
    descripcion?:  string;
    ingredientes: CreateIngredienteDto[];
    estado?:       string;
    IdUsuario:    number;
}
