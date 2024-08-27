Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  let output = new Array(rowsCount).fill().map(() => new Array(colsCount));
  let index = 0; // Índice no array original
  let i = 0,
    j = 0; // Índices para as posições na matriz de saída
  let direction = "down"; // Direção inicial de preenchimento

  while (index < this.length) {
    output[i][j] = this[index++]; // Atribui o valor corrente e incrementa o índice
    //console.log({ current: this[index - 1], flow: direction, i, j }); // Log atual do estado

    if (direction === "down") {
      if (i === rowsCount - 1) {
        // Verifica se deve mudar de coluna
        direction = "up"; // Muda a direção
        j++; // Move para a próxima coluna
      } else {
        i++; // Continua descendo na mesma coluna
      }
    } else if (direction === "up") {
      if (i === 0) {
        // Verifica se está no topo
        direction = "down"; // Muda a direção
        j++; // Move para a próxima coluna
      } else {
        i--; // Continua subindo na mesma coluna
      }
    }
  }

  return output;
};
