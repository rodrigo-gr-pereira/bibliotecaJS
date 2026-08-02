import promptSync from "prompt-sync";
import { listarLivros } from "./listarLivros.js";
import { buscarLivro } from "./buscarLivro.js";

const prompt = promptSync();

let opcao;
do {
  console.log(`
====================================
SISTEMA DE BIBLIOTECA
====================================

1 - Listar livros
2 - Buscar Livro
0 - Sair
`);

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      listarLivros();
      break;

    case "2":
      const tituloBuscado = prompt("Digite o título do livro: ");
      buscarLivro(tituloBuscado);
      break;

    case "0":
      console.log("Saindo...");
      break;

    default:
      console.log("Opção inválida!");
  }
} while (opcao !== "0");
