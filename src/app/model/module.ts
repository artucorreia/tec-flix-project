import { Class } from "./class";

export interface Module {
    id: string;
    titulo: string;
    quantidadeAulas: number;
    cursoId: string;
    aulas: Class[];
}
