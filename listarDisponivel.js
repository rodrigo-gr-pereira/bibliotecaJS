import { dadosLivros } from './dadosLivros.js'; // Ajuste o caminho se necessário

function listarDisponiveis() {
  // Filtra apenas os livros com o atributo disponível igual a true
  const livrosDisponiveis = dadosLivros.filter(livro => livro.disponivel);

  if (livrosDisponiveis.length > 0) {
    livrosDisponiveis.forEach(livro => {
      console.log(`Título: ${livro.titulo.toUpperCase()}`);
      console.log(`Autor: ${livro.autor}`);
      console.log(`Categoria: ${livro.categoria}`);
      console.log(`Número de páginas: ${livro.paginas}`);
      console.log(`Disponibilidade: Disponível`);
      console.log("-".repeat(30)); // Linha divisória entre os livros
    });
  } else {
    console.log("Nenhum livro disponível no momento.");
  }
}

export { listarDisponiveis };
