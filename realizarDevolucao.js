import { dadosLivros } from "./dadosLivros.js";

function realizarDevolucao(titulo) {
    // Busca o livro no array pelo título
    const livroEncontrado = dadosLivros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    // Caso o livro exista
    if (livroEncontrado) {
        livroEncontrado.disponivel = true; // Altera a disponibilidade para true
        console.log("Livro devolvido com sucesso!");
        return;
    }

    // Caso contrário (livro não existe no sistema)
    console.log("Livro não encontrado!");
}

// Exporta a função para ser usada no menu inicial
export { realizarDevolucao };
