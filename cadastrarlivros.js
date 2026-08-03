import promptSync from "prompt-sync";
import { dadosLivros } from "./dadosLivros.js";

const prompt = promptSync();

function cadastrarLivro() {
    console.log("\n--- CADASTRO DE LIVRO ---");

    const titulo = prompt("Digite o título do livro:").toUpperCase();
    const autor = prompt("Digite o autor do livro:");
    const categoria = prompt("Digite a categoria do livro:");
    const paginas = Number(prompt("Digite o número de páginas:"));

    const novoLivro = {
        titulo: titulo,
        autor: autor,
        categoria: categoria,
        paginas: paginas,
        disponivel: true
    };

    dadosLivros.push(novoLivro);

    console.log(`\nLivro "${titulo}" cadastrado com sucesso!`);
}

export { cadastrarLivro };