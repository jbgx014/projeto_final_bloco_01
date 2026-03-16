import { Perfume } from "../model/Perfume";


export interface PerfumeRepository {

    procurarPorCodigo(codigo: number): void;
    listarTodos(): void;
    cadastrar(perfume: Perfume): void;
    atualizar(perfume: Perfume): void;
    deletar(codigo: number): void;
}