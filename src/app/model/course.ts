import { Module } from "./module";
import { Rating } from "./rating";

export interface Course {
    id: string;
    titulo: string;
    descricao: string;
    imgCapa: string;
    valor: number;
    tempoTotal: string;
    professor: string;
    categorias: string[];
    avaliacoes: Rating[];
    modulos: Module[];
}
