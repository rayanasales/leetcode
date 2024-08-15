# 322. Coin Change

## Found at

[Interview Prep – Google Tech Dev Guide](https://techdevguide.withgoogle.com/paths/interview/?programming_languages=javascript)

## Leetcode link

[Coin Change - LeetCode](https://leetcode.com/problems/coin-change/description/)

## Código Comentado

```javascript
var coinChange = function (coins, amount) {
  // Criamos um array `dp` para armazenar o número mínimo de moedas necessário para cada valor de 0 até `amount`.
  // O tamanho do array é `amount + 1` porque precisamos de uma posição para cada valor de 0 até `amount`.
  // Inicialmente, todos os valores do array são definidos como `Infinity`, representando que a quantidade ainda não é alcançável.
  let dp = Array(amount + 1).fill(Infinity);

  // Caso base: Para fazer o valor 0, precisamos de 0 moedas.
  // Isso é lógico porque não precisamos de nenhuma moeda para alcançar a quantia 0.
  dp[0] = 0;

  // Agora, iteramos sobre cada moeda disponível no array `coins`.
  for (let coin of coins) {
    // Para cada moeda, iteramos sobre todos os valores de `coin` até `amount`.
    // Isso significa que estamos tentando encontrar o número mínimo de moedas necessário para cada valor possível, considerando a moeda atual.
    for (let i = coin; i <= amount; i++) {
      // A linha abaixo atualiza o valor de `dp[i]`.
      // O `dp[i]` é o valor atual de moedas necessário para formar a quantia `i`.
      // `dp[i - coin] + 1` representa o número de moedas necessário se usarmos a moeda atual (`coin`),
      // adicionando 1 (que é a moeda atual) ao valor mínimo de moedas necessário para formar a quantia `i - coin`.
      // `Math.min(dp[i], dp[i - coin] + 1)` escolhe o menor número entre não usar a moeda atual (valor anterior de `dp[i]`) e usar a moeda atual (valor `dp[i - coin] + 1`).
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }

  // Depois de preencher o array `dp`, verificamos se conseguimos formar a quantia `amount`.
  // Se `dp[amount]` ainda for `Infinity`, significa que não conseguimos formar a quantia com as moedas disponíveis, então retornamos `-1`.
  // Caso contrário, retornamos `dp[amount]`, que representa o número mínimo de moedas necessário para formar `amount`.
  return dp[amount] === Infinity ? -1 : dp[amount];
};
```

## Explicação Detalhada

1. **Array `dp` Inicializado:**

   - **`let dp = Array(amount + 1).fill(Infinity);`**
     - Criamos um array `dp` de tamanho `amount + 1`. Esse array vai armazenar o número mínimo de moedas necessárias para formar cada valor entre 0 e `amount`.
     - Inicializamos o array com `Infinity` porque, inicialmente, consideramos que todos os valores são inatingíveis.

2. **Caso Base:**

   - **`dp[0] = 0;`**
     - Para formar o valor 0, não precisamos de moedas. Portanto, `dp[0] = 0`.

3. **Iteração sobre as Moedas:**

   - **`for (let coin of coins) { ... }`**
     - Iteramos por cada moeda disponível em `coins`. Para cada moeda, tentamos calcular quantas moedas são necessárias para formar cada valor possível até `amount`.

4. **Iteração sobre as Quantias:**

   - **`for (let i = coin; i <= amount; i++) { ... }`**
     - Para cada moeda, iteramos sobre todas as quantias possíveis a partir do valor da moeda até `amount`.

5. **Atualizando o Array `dp`:**

   - **`dp[i] = Math.min(dp[i], dp[i - coin] + 1);`**
     - Aqui, estamos determinando o número mínimo de moedas necessárias para formar a quantia `i`.
     - **`dp[i - coin] + 1`:** Se usarmos a moeda atual (`coin`), adicionamos 1 moeda ao número mínimo de moedas necessárias para formar `i - coin`.
     - **`Math.min(dp[i], dp[i - coin] + 1)`:** Escolhemos o menor valor entre `dp[i]` (não usar a moeda atual) e `dp[i - coin] + 1` (usar a moeda atual). Esse valor é armazenado em `dp[i]`.

6. **Retorno do Resultado:**
   - **`return dp[amount] === Infinity ? -1 : dp[amount];`**
     - Se, após preencher o array `dp`, `dp[amount]` ainda for `Infinity`, significa que não conseguimos formar a quantia `amount` com as moedas disponíveis. Portanto, retornamos `-1`.
     - Caso contrário, retornamos `dp[amount]`, que contém o número mínimo de moedas necessárias para formar `amount`.

## Conclusão

Esse código utiliza a **Programação Dinâmica** para resolver o problema de forma eficiente, calculando o número mínimo de moedas necessárias para atingir cada quantia de 0 até `amount`. O uso de `Math.min` garante que sempre escolhemos a solução mais eficiente (menor número de moedas). O código verifica todas as possíveis combinações de moedas para construir o valor desejado e retorna o número mínimo de moedas necessário ou `-1` se for impossível.

Se precisar de mais alguma coisa, estou aqui para ajudar!
