import { Perfume } from "./Perfume";

export class Perfumaria extends Perfume {
    
    private _categoria: string; //Masculino, Feminino, Unissex

        constructor(codigo: number, nome: string, volume: number, familiaOlfativa: string, tipo: number, categoria: string) {
        super(codigo, nome, volume, familiaOlfativa, tipo);
        this._categoria = categoria;
        }

        public get categoria(){
            return this._categoria;
        }

        public set categoria(categoria: string){
            this._categoria = categoria;
        }

        public visualizar(): void {
            super.visualizar();
            console.log("Categoria: " + this._categoria);
            console.log("*****************************************************\n\n");
        }
    }
