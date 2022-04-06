

function calcular() {
    var input1 = document.getElementById("num1");
    var n1 = Number(input1.value);
    var input2 = document.getElementById("num2");     
    var n2 = Number(input2.value);
    var inputOp = document.getElementById("operacoes")
    var operacao = inputOp.value;

    switch (operacao){
        
        case ('Somar'):
            resultado = n1 + n2
            var paragrafo = document.getElementById("paragrafo")
            paragrafo.innerHTML = resultado
            break
        case ('Subtrair'):
            resultado = n1 - n2
            var paragrafo = document.getElementById("paragrafo")
            paragrafo.innerHTML = resultado
            break
        case ('Multiplicar'):
            resultado = n1 * n2
            var paragrafo = document.getElementById("paragrafo")
            paragrafo.innerHTML = resultado
            break
        case ('Dividir'):
            resultado = n1 / n2
            var paragrafo = document.getElementById("paragrafo")
            paragrafo.innerHTML = resultado
            break
        default: ('Operação inválida')    
    }
};
