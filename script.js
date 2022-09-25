async function calcular() {
  // Instanciar a rede neural
  const net = new brain.NeuralNetwork({ hiddenLayers: [1] })
  
  // Forneceu dados para treinamento da rede neural
  const training = [
    { input: [0, 0, 1], output: [0] },
    { input: [0, 1, 1], output: [0] },
    { input: [0, 1, 0], output: [0] },
    { input: [1, 0, 1], output: [1] },
    { input: [1, 1, 0], output: [1] },
  ]

  // Treinar a rede neural com base nos dados fornecidos
  net.train(training)

  // Ler os dados a partir dos quais ela terá que adivinhar
  const output = net.run([1, 1, 1])

  // Mostrar o resultado
  const $result = document.querySelector('#result')
  $result.innerHTML = `Resultado: ${output}`
}