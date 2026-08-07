import { dadosLivros } from './dadosLivros.js'; // Ajuste o caminho se necessário

function buscarLivro(titulo) {
  // Busca o livro ignorando diferenças entre maiúsculas e minúsculas
  const livroEncontrado = dadosLivros.find(
    livro => livro.titulo.toLowerCase() === titulo.toLowerCase()
  );

  if (livroEncontrado) {
    console.log(`Título: ${livroEncontrado.titulo.toUpperCase()}`);
    console.log(`Autor: ${livroEncontrado.autor}`);
    console.log(`Categoria: ${livroEncontrado.categoria}`);
    console.log(`Número de páginas: ${livroEncontrado.paginas}`);
    console.log(`Disponibilidade: ${livroEncontrado.disponivel ? "Disponível" : "Indisponível"}`);
  } else {
    console.log(`Livro com o título "${titulo}" não foi encontrado.`);
  }
}

export { buscarLivro };
