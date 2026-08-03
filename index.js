import promptSync from "prompt-sync";
import { listarLivros } from "./listarLivros.js";
import { buscarLivro } from "./buscarLivro.js";
import { listarDisponiveis } from "./listarDisponivel.js";
import { cadastrarLivro } from "./cadastrarlivros.js";
import { realizarEmprestimo } from "./realizarEmprestimo.js";

const prompt = promptSync();

let opcao;
do {
  console.log(`
====================================
SISTEMA DE BIBLIOTECA
====================================

1 - Listar livros
2 - Buscar Livro
3- Listar livros disponíveis
4 - Cadastrar livro
5- Realizar emprestimo
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

    case "3":
      listarDisponiveis();
      break;

    case "4":
      cadastrarLivro();
      break;

    case "5":
      const tituloParaEmprestimo = prompt("Digite o título do livro para empréstimo: ");
      realizarEmprestimo(tituloParaEmprestimo);
      break;

    case "0":
      console.log("Saindo...");
      break;

    default:
      console.log("Opção inválida!");
  }
} while (opcao !== "0");
