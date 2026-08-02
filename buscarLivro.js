import { livros } from "./listarLivros.js";

// Função principal exigida pelo requisito RF03
 function buscarLivro(titulo) {

  console.log("\n===LIVRO ENCONTRADO===");
    // Busca o livro ignorando diferenças entre maiúsculas e minúsculas
    const livroEncontrado = livros.find(
        livro => livro.titulo.toLowerCase() === titulo.toLowerCase()
    );

    // Verifica se o livro foi encontrado e exibe no console
    if (livroEncontrado) {
       // Trecho do código que roda quando o livro é encontrado:
      console.log(`Título: ${livroEncontrado.titulo.toUpperCase()}`); // Converte para MAIÚSCULAS
      console.log(`Autor: ${livroEncontrado.autor}`);               // Mantém o autor original
      console.log(`Categoria: ${livroEncontrado.categoria}`);
      console.log(`Número de páginas: ${livroEncontrado.paginas}`);
      console.log(`Disponibilidade: ${livroEncontrado.disponivel ? "Disponível" : "Indisponível"}`);

    } else {
        console.log("Livro não encontrado.");
    }
}
export { buscarLivro };




