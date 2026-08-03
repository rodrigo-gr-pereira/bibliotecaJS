import { dadosLivros } from "./dadosLivros.js";

function realizarEmprestimo(titulo) {
    // Busca o livro no array (ignorando maiúsculas/minúsculas para evitar erros)
    const livroEncontrado = dadosLivros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    // Caso o livro exista E esteja disponível
    if (livroEncontrado && livroEncontrado.disponivel === true) {
        livroEncontrado.disponivel = false; // Altera a disponibilidade para false
        console.log("Livro emprestado com sucesso!");
        return;
    }

    // Caso contrário (não existe ou não está disponível)
    console.log("Livro indisponível!");
}

// Exporta a função para ser usada no menu inicial
export { realizarEmprestimo };
