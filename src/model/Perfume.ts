export abstract class Perfume{
    private _codigo: number;
    private _nome: string;
    private _volume: number;
    private _familiaOlfativa: string;
    private _tipo: number;

    constructor(codigo: number, nome: string, volume: number, familiaOlfativa: string, tipo: number) {
        this._codigo = codigo;
        this._nome = nome;
        this._volume = volume;
        this._familiaOlfativa = familiaOlfativa;
        this._tipo = tipo;
    }

    public get codigo(){
        return this._codigo;
    }

    public set codigo(codigo: number){
        this._codigo = codigo;
    }

        public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get volume(){
        return this._volume;
    }

    public set volume(volume: number){
        this._volume = volume;
    }

    public get familiaOlfativa(){
        return this._familiaOlfativa;
    }

    public set familiaOlfativa(familiaOlfativa: string){
        this._familiaOlfativa = familiaOlfativa;
    }

    public get tipo(){
        return this._tipo;
    }

    public set tipo(tipo: number){
        this._tipo = tipo;
    }

    public visualizar(): void{

        let tipo: string = "";

        switch(this._tipo) {
            case 1: 
                tipo = "Perfumaria";
                break;
            case 2:
                tipo = "XYZ Casa - Perfumes para Casa";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do Perfume:");
        console.log("*****************************************************");
        console.log("Nome do Perfume: " + this._nome);
        console.log("Código do Perfume: " + this._codigo);
        console.log("Tipo: " + tipo);
        console.log("Volume (ml): " + this._volume);
        console.log("Família Olfativa: " + this._familiaOlfativa);
    }



}