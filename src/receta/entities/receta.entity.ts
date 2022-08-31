
import { Schema } from 'mongoose';

export const RecetaSchema = new Schema({
    nombre: String,
    descripcion: String,
    ingredientes: [{
        type:Schema.Types.ObjectId,
        ref: 'Ingrediente'
    }],
    estado: String,
    idUsuario: String

})
