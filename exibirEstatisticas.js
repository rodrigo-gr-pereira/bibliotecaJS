import { dadosLivros } from "./dadosLivros.js";

function exibirEstatisticas() {
    const totalLivros = dadosLivros.length;
    if (totalLivros === 0) return console.log("Nenhum livro cadastrado.");

    const disponiveis = dadosLivros.filter(l => l.disponivel).length;
    const indisponiveis = totalLivros - disponiveis;
    const totalPaginas = dadosLivros.reduce((acc, l) => acc + l.paginas, 0);
    const mediaPaginas = totalPaginas / totalLivros;

    console.log(`Total de livros cadastrados: ${totalLivros}`);
    console.log(`Quantidade de livros disponíveis: ${disponiveis}`);
    console.log(`Quantidade de livros indisponíveis: ${indisponiveis}`);
    console.log(`Total de páginas: ${totalPaginas}`);
    console.log(`Média de páginas por livro: ${mediaPaginas.toFixed(2)}`);
}

export { exibirEstatisticas };
