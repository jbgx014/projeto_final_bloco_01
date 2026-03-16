import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Perfume } from "./src/model/Perfume";
import { Perfumaria } from "./src/model/Perfumaria";
import { XyzCasa } from "./src/model/XyzCasa";
import { PerfumeController } from "./src/controller/PerfumeController";

export function main(){

    //Instância da Classe PerfumeController
    let perfumes: PerfumeController = new PerfumeController();

    let opcao: number;
    let codigo, volume, tipo: number;
    let nome, familiaOlfativa, categoria, linha: string;
    const tiposPerfumes = ["Perfumaria", "XYZ Casa - Perfumes para Casa"];

    let perfumaria1: Perfumaria = new Perfumaria(perfumes.gerarCodigo(), "La Vie Est Belle", 100, "Amadeirado", 1, "Feminino");
    perfumes.cadastrar(perfumaria1);

    let perfumaria2: Perfumaria = new Perfumaria(perfumes.gerarCodigo(), "Coffee Man", 100, "Doce", 1, "Masculino");
    perfumes.cadastrar(perfumaria2);

    let perfumeCasa1: XyzCasa = new XyzCasa(perfumes.gerarCodigo(), "Perfume Casa Sublime 01", 120, "Floral", 2, "Sublime");
    perfumes.cadastrar(perfumeCasa1);

    let perfumeCasa2: XyzCasa = new XyzCasa(perfumes.gerarCodigo(), "Perfume Casa Leveza 07", 120, "Citrico", 2, "Leveza");
    perfumes.cadastrar(perfumeCasa2);


    while (true) {

        console.log(colors.bg.black, colors.fg.cyanstrong,"*****************************************************");
        console.log("                                                     ");
        console.log("                     XYZ PERFUMES                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Perfume                    ");
        console.log("            2 - Listar Perfumes                      ");
        console.log("            3 - Buscar Perfume por Código            ");
        console.log("            4 - Atualizar Perfume                    ");
        console.log("            5 - Apagar Perfume                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Digite a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6){
            console.log(colors.fg.cyanstrong,"\nPrograma finalizado!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,"\nCadastrar Perfume:\n", colors.reset);

                console.log("Digite o nome do perfume: ");
                nome = readlinesync.question("");

                console.log("Digite o volume do perfume (ml): ");
                volume = readlinesync.questionInt("");

                console.log("Digite a família olfativa do perfume: ");
                familiaOlfativa = readlinesync.question("");

                console.log("Digite o tipo do perfume: ");
                tipo = readlinesync.keyInSelect(tiposPerfumes, "", {cancel: false}) + 1;

                switch(tipo) {
                    case 1:
                        console.log("Digite a categoria do perfume (Feminino | Masculino | Unissex): ");
                        categoria = readlinesync.question("");
                        perfumes.cadastrar(new Perfumaria(perfumes.gerarCodigo(), nome, volume, familiaOlfativa, tipo, categoria));
                        break;
                    case 2:
                        console.log("Digite a linha do perfume (Sublime | Leveza): ");
                        linha = readlinesync.question("");
                        perfumes.cadastrar(new XyzCasa(perfumes.gerarCodigo(), nome, volume, familiaOlfativa, tipo, linha));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\nListar Perfumes:\n", colors.reset);

                perfumes.listarTodos();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\nBuscar Perfume por Código:\n", colors.reset);

                console.log("Digite o código do perfume: ");
                codigo = readlinesync.questionInt("");
                perfumes.procurarPorCodigo(codigo);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\nAtualizar Perfume:\n", colors.reset);

                console.log("Digite o código do perfume: ");
                codigo = readlinesync.questionInt("");

                let perfume = perfumes.buscarNoArray(codigo);

                if (perfume != null) {

                    console.log("Digite o nome do perfume: ");
                    nome = readlinesync.question("");

                    console.log("Digite o volume do perfume (ml): ");
                    volume = readlinesync.questionInt("");

                    console.log("Digite a família olfativa do perfume: ");
                    familiaOlfativa = readlinesync.question("");

                    tipo = perfume.tipo;

                    switch(tipo) {
                    case 1:
                        console.log("Digite a categoria do perfume (Feminino | Masculino | Unissex): ");
                        categoria = readlinesync.question("");
                        perfumes.atualizar(new Perfumaria(codigo, nome, volume, familiaOlfativa, tipo, categoria));
                        break;
                    case 2:
                        console.log("Digite a linha do perfume (Sublime | Leveza): ");
                        linha = readlinesync.question("");
                        perfumes.atualizar(new XyzCasa(codigo, nome, volume, familiaOlfativa, tipo, linha));
                        break;
                }
                } else {
                    console.log(colors.fg.red, "\O perfume com código: " + codigo + " não foi encontrado!", colors.reset);
                }


                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\nApagar Perfume:\n", colors.reset);

                console.log("Digite o código do perfume: ");
                codigo = readlinesync.questionInt("");
                perfumes.deletar(codigo);

                keyPress()
                break;
            default:
                console.log(colors.fg.redstrong,"\nOpção inválida!\n", colors.reset);

                keyPress()
                break;
        } 

    }

}

    export function sobre(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Juliana Borges - juborges014@gmail.com");
    console.log("github.com/jbgx014");
    console.log("*****************************************************");
}

    function keyPress(): void{
        console.log(colors.reset, "");
        console.log("\nPressione enter para continuar...");
        readlinesync.prompt();
    }
        
main();