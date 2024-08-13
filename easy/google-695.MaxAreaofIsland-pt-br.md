# 695. Max Area of Island (pt-br)

[Max Area of Island - LeetCode](https://leetcode.com/problems/max-area-of-island/)

## O que é Depth-First Search (DFS)?

**DFS (Busca em Profundidade)** é um algoritmo utilizado para percorrer ou buscar em estruturas de dados como grafos ou árvores. A ideia básica é começar em um nó (ou célula no caso de uma grade/matriz) e explorar o máximo possível ao longo de cada ramo antes de retroceder. No contexto de matrizes (como o problema que estamos resolvendo), DFS pode ser usado para explorar todas as células conectadas que fazem parte de uma "ilha" de `1`s.

## Quando usar DFS?

DFS é particularmente útil quando você precisa:

- **Explorar ou percorrer** todos os elementos em uma estrutura de grafo ou matriz.
- **Encontrar componentes conectados**, como ilhas em uma matriz onde as células estão conectadas por alguma regra específica (neste caso, células `1` conectadas 4-direcionalmente).

## Estratégia para Resolver o Problema

**Objetivo:** Encontrar a maior área de uma ilha em uma matriz 2D onde `1` representa terra e `0` representa água. Uma ilha é formada por `1`s conectados horizontalmente ou verticalmente (não diagonalmente).

**Passos:**

1. **Percorrer a Matriz:** Vamos percorrer cada célula da matriz. Sempre que encontrarmos uma célula com `1` (ou seja, parte de uma ilha), precisamos calcular a área dessa ilha.
2. **Usar DFS:** Quando encontramos um `1`, iniciamos uma DFS para explorar toda a ilha conectada àquela célula. A DFS vai:
   - Marcar as células visitadas (trocando `1` por `0` para não contarmos novamente).
   - Somar todas as células conectadas que também são `1` para calcular a área da ilha.
3. **Comparar Áreas:** A cada nova ilha encontrada, comparamos sua área com a maior área já encontrada. Se for maior, atualizamos o valor da maior área.

## Por que trocamos `1` por `0` na DFS?

Quando fazemos a troca de `1` por `0` na DFS, estamos basicamente dizendo que já visitamos aquela célula. O motivo pelo qual fazemos isso é para evitar que contemos a mesma célula mais de uma vez durante a busca pela área da ilha.

## Mas e se quisermos saber quais células eram `1` originalmente?

Ao marcarmos uma célula como `0`, realmente perdemos a informação original de que aquela célula era `1`. No entanto, isso não é um problema para a nossa abordagem por alguns motivos:

1. **Objetivo do Algoritmo:** Nosso objetivo é encontrar a maior área de uma ilha. Não precisamos mais da informação de quais células eram `1` depois de tê-las contado, porque estamos apenas interessados no tamanho da área. Assim que contamos uma célula, ela deixa de ser relevante para o restante do algoritmo.
2. **Evitar Contagens Duplicadas:** Marcando a célula como `0`, garantimos que não a contaremos novamente se formos encontrar uma nova ilha ou continuar a DFS. Isso impede que a área da ilha seja superestimada.

## Por que isso funciona?

Depois de contar a área de uma ilha, a informação que realmente importa é o número de células conectadas (ou seja, a área). Não precisamos mais saber onde estavam as células `1` porque o número total de células conectadas já foi registrado. Marcar as células como `0` evita que voltemos para contar a mesma ilha acidentalmente.

## Resumo

- Marcamos as células como `0` durante a DFS para evitar contagens duplicadas e simplificar o processo.
- Essa troca é segura porque o foco do algoritmo é contar as células conectadas, e não manter um histórico exato de onde estavam os `1`s.
- Se precisar preservar a matriz original, você pode fazer uma cópia antes de iniciar a DFS. Mas lembre-se, essa cópia consome mais memória e não é necessária para o propósito de apenas encontrar a maior ilha.

## Implementação do Código

```jsx
/**
 * @param {number[][]} grid - Matriz que representa o mapa de ilhas (1 para terra, 0 para água).
 * @return {number} - Retorna a maior área de uma ilha encontrada.
 */
var maxAreaOfIsland = function (grid) {
  let maxArea = 0; // Armazena a maior área de ilha encontrada até agora
  let linhas = grid.length; // Número de linhas da matriz
  let colunas = grid[0].length; // Número de colunas da matriz

  // Algoritmo Depth-First Search (DFS) para realizar a busca em profundidade (DFS) em uma ilha
  const buscaEmProfundidade = (linha, coluna) => {
    // Caso base: Verifica se estamos dentro dos limites da matriz ou se a célula já é água (0)
    if (
      linha < 0 ||
      coluna < 0 ||
      linha >= linhas ||
      coluna >= colunas ||
      grid[linha][coluna] === 0
    ) {
      return 0;
    }

    grid[linha][coluna] = 0; // Marca a célula atual como visitada, transformando em 0 (água).
    let tamanhoDaIlha = 1; // Inicia o tamanho da ilha com 1 (a célula atual)

    // Recursivamente visita todas as células conectadas (cima, baixo, esquerda, direita)
    tamanhoDaIlha += buscaEmProfundidade(linha - 1, coluna); // Cima
    tamanhoDaIlha += buscaEmProfundidade(linha + 1, coluna); // Baixo
    tamanhoDaIlha += buscaEmProfundidade(linha, coluna - 1); // Esquerda
    tamanhoDaIlha += buscaEmProfundidade(linha, coluna + 1); // Direita

    return tamanhoDaIlha; // Retorna o tamanho total dessa ilha
  };

  // Percorre cada célula da matriz
  for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
      if (grid[linha][coluna] === 1) {
        // Se a célula é terra (1)
        let tamanhoDaIlha = buscaEmProfundidade(linha, coluna); // Calcula a área da ilha atual
        maxArea = Math.max(maxArea, tamanhoDaIlha); // Atualiza maxArea se essa ilha for maior
      }
    }
  }

  return maxArea; // Retorna a maior área de ilha encontrada
};
```

## Resumo

- **DFS** é usado para explorar todos os `1`s conectados em uma ilha, garantindo que contamos todas as células que fazem parte da mesma.
- A **estratégia** consiste em percorrer toda a matriz, iniciar uma DFS sempre que encontrarmos um `1`, e marcar as células como visitadas.
- No final, o código retorna a maior área de ilha encontrada.

## Leetcode post solution

[Max Area of Island - LeetCode Solutions](https://leetcode.com/problems/max-area-of-island/solutions/5632171/detailed-explanation-max-area-of-island-solved/)
