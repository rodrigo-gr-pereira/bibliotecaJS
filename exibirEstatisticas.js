import { dadosLivros } from './dadosLivros.js'; // Ajuste o caminho se necessário

function exibirEstatisticas() {
  console.log("\n=== ESTATÍSTICAS DO SISTEMA ===");

  const totalLivros = dadosLivros.length;

  if (totalLivros === 0) {
    console.log("Nenhum livro cadastrado no sistema.");
    return;
  }

  // Cálculos utilizando métodos de array
  const livrosDisponiveis = dadosLivros.filter(livro => livro.disponivel).length;
  const livrosIndisponiveis = totalLivros - livrosDisponiveis;
  
  const totalPaginas = dadosLivros.reduce((acc, livro) => acc + livro.paginas, 0);
  const mediaPaginas = totalPaginas / totalLivros;

  // Exibição dos resultados no console
  console.log(`Total de livros cadastrados: ${totalLivros}`);
  console.log(`Quantidade de livros disponíveis: ${livrosDisponiveis}`);
  console.log(`Quantidade de livros indisponíveis: ${livrosIndisponiveis}`);
  console.log(`Total de páginas considerando todos os livros: ${totalPaginas}`);
  console.log(`Média de páginas por livro: ${mediaPaginas.toFixed(2)}`);
}

export { exibirEstatisticas };
