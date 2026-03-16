import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Perfume } from "./src/model/Perfume";
import { Perfumaria } from "./src/model/Perfumaria";
import { XyzCasa } from "./src/model/XyzCasa";

export function main(){
    let opcao: number;

    const perfumaria: Perfumaria = new Perfumaria(1, "La Vie Est Belle", 100, "Amadeirado", 1, "Feminino");
    perfumaria.visualizar();

    const perfumeCasa: XyzCasa = new XyzCasa(2, "Perfume Casa Sublime 01", 120, "Floral", 2, "Sublime");
    perfumeCasa.visualizar();


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

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\nListar Perfumes:\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\nBuscar Perfume por Código:\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\nAtualizar Perfume:\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\nApagar Perfume:\n", colors.reset);

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