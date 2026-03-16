import { Perfume } from "../model/Perfume";
import { PerfumeRepository } from "../repository/PerfumeRepository";
import { colors } from "../util/Colors";


export class PerfumeController implements PerfumeRepository {

    private listaPerfumes: Array<Perfume> = new Array<Perfume>();
    codigo: number = 0;

    procurarPorCodigo(codigo: number): void {
        let buscaPerfume = this.buscarNoArray(codigo);

        if (buscaPerfume != null) {
            buscaPerfume.visualizar();
        } else
            console.log(colors.fg.red,"\nO perfume com código: " + codigo + " não foi encontrado!", colors.reset);
    }
    listarTodos(): void {
        for(let perfume of this.listaPerfumes){
            perfume.visualizar();
        };
    }
    cadastrar(perfume: Perfume): void {
        this.listaPerfumes.push(perfume);
        console.log(colors.fg.green, "\nO perfume com código: " + perfume.codigo + " foi cadastrado com sucesso!", colors.reset);
    }
    atualizar(perfume: Perfume): void {
        let buscaPerfume = this.buscarNoArray(perfume.codigo);

        if (buscaPerfume != null) {
            this.listaPerfumes[this.listaPerfumes.indexOf(buscaPerfume)] = perfume;
            console.log(colors.fg.green, "\nO perfume com código: " + perfume.codigo + " foi atualizado com sucesso!", colors.reset);
        } else 
            console.log(colors.fg.red, "\nO perfume com código: " + perfume.codigo + " não foi encontrado!", colors.reset);
    }

    deletar(codigo: number): void {
        try{
        let buscaPerfume = this.buscarNoArray(codigo);

        if (buscaPerfume !=null) {
            this.listaPerfumes.splice(this.listaPerfumes.indexOf(buscaPerfume), 1);
            console.log(colors.fg.green, "\nO perfume com código: " + codigo + " foi apagado com sucesso!", colors.reset);
        } else 
            throw new Error("\nO perfume com o código " + codigo + " não foi encontrado!");
    } catch(error: any){
        console.log(error.message);
    }
}

    /* Gerar Código do Perfume */
    public gerarCodigo(): number{
        return ++ this.codigo;
    }

    /*Checa se perfume existe*/
    public buscarNoArray(codigo: number): Perfume | null {
        for (let perfume of this.listaPerfumes) {
            if (perfume.codigo === codigo)
                return perfume;
        }
        return null;
    }
    
}