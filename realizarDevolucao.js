import { dadosLivros } from "./dadosLivros.js";

function realizarDevolucao(titulo) {
    const livroEncontrado = dadosLivros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    if (livroEncontrado) {
        livroEncontrado.disponivel = true;
        console.log("Livro devolvido com sucesso!");
        return;
    }

    console.log("Livro não encontrado!");
}

export { realizarDevolucao };
