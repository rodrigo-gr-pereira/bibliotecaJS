import { dadosLivros } from "./dadosLivros.js";

// Função exigida pelo requisito RF04
function listarDisponiveis() {
    // Filtra apenas os livros com o atributo disponivel igual a true
    const livrosDisponiveis = dadosLivros.filter(livro => livro.disponivel === true);

    // Verifica se existem livros disponíveis na lista
    if (livrosDisponiveis.length === 0) {
        console.log("Nenhum livro disponível no momento.");
        return;
    }

    console.log("=== LIVROS DISPONÍVEIS ===");
    
    // Passa por cada livro filtrado e exibe as informações solicitadas
    livrosDisponiveis.forEach(livro => {
        console.log(`Título: ${livro.titulo.toUpperCase()}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Categoria: ${livro.categoria}`);
        console.log(`Número de páginas: ${livro.paginas || livro.numeroPaginas || "Não informado"}`);
        console.log(`Disponibilidade: ${livro.disponivel ? "Disponível" : "Indisponível"}`);
        console.log("-----------------------");
    });
}

// Exporta a função para ser usada no menu inicial
export { listarDisponiveis };
