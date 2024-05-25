import { User } from "./user";

export interface Rating {
    id: string;
    cursoId: string;
    userId: string;
    nota: number;
    user: User;
}
