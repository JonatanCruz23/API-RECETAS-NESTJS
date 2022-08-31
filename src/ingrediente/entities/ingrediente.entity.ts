import { Schema } from "mongoose";

export const IngredienteSchema = new Schema({
    id: Number,
    nombre:   String,
    cantidad: String
})
