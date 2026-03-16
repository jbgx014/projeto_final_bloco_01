import { Perfume } from "./Perfume";

export class XyzCasa extends Perfume {

    private _linha: string; //Qual a linha? Sublime ou Leveza
    
        constructor(codigo: number, nome: string, volume: number, familiaOlfativa: string, tipo: number, linha: string) {
        super(codigo, nome, volume, familiaOlfativa, tipo);
        this._linha = linha;
        }

        public get linha(){
            return this._linha;
        }

        public set linha(linha: string){
            this._linha = linha;
        }

        public visualizar(): void {
            super.visualizar();
            console.log("Linha: " + this._linha);
            console.log("*****************************************************\n\n");
        }
}