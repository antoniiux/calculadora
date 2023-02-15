const result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  let expression = result.value;
  
  // substitui todos os valores percentuais por sua equivalência decimal
  expression = expression.replace(/(\d+)%/g, function(match, p1) {
    return p1 / 100;
  });

  try {
    // usa a função eval para calcular a expressão matemática
    result.value = eval(expression);
  } catch (error) {
    // se houver um erro, exibe uma mensagem de erro no visor
    result.value = 'Erro';
  }
}