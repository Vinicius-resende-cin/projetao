import mongoose from "mongoose";

export interface Condominio {
  cnpj: string;
  nome: string;
  valorMensalidade: number;
  administradorEmail: string;
}

const CondominioSchema = new mongoose.Schema({
  cnpj: String,
  nome: String,
  valorMensalidade: Number,
  administradorEmail: String,
});

export default mongoose.models.Condominiums ||
               mongoose.model("Condominiums", CondominioSchema);
