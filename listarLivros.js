import { dadosLivros } from './dadosLivros.js';

function listarLivros() {
  dadosLivros.forEach(livro => {
    console.log(`Título: ${livro.titulo.toUpperCase()}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log(`Número de páginas: ${livro.paginas}`);
    console.log(`Disponibilidade: ${livro.disponivel ? "Disponível" : "Indisponível"}`);
    console.log("-".repeat(30)); // Linha divisória entre os livros
  });
}

export { listarLivros };