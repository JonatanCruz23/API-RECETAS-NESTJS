import { Schema } from "mongoose";

export const UsuarioSchema = new Schema({
    email: String,
    nombre: String,
    usuario: String,
    constraseña: String,
    rol: String,
    estado: String
})
