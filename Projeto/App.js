const livros = require("./Database");

// pegar um input
const readline = require("readline-sync");

const entradaInicial = readline.question("Deseja buscar um livro? S/N ");

if (entradaInicial.toLocaleUpperCase() === "S") {
  console.log("Essas são as categorias disponíveis: ");
  console.log("Produtividade e estilo de vida", "Tecnologia", "Estilo de vida");

  const entradaCategoria = readline.question("Qual categoria você escolhe?");

  const retorno = livros.filter(
    (livro) => livro.categoria === entradaCategoria
  );
  console.table(retorno);
} else {
  const livrosAll = livros.sort((a, b) => {
    return a.paginas - b.paginas;
  });
  console.log("Essas são todos os livros disponíveis: ");
  console.table(livrosAll);
}
