import promptSync from "prompt-sync";
import { listarLivros } from "./listarLivros.js";


const prompt = promptSync();

let opcao;
do {
  console.log(`
====================================
SISTEMA DE BIBLIOTECA
====================================

1 - Listar livros
2- Buscar Livro
0 - Sair
`);

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
     case '1':
        listarLivros();
        break; // chamada direta da função

    default:
      console.log("Opção inválida!");
  }
} while (opcao !== "0");
