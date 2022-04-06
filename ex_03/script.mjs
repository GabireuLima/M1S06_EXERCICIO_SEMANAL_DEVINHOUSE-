function buscar() {
    let elementCep = document.getElementById('numberCep')
    let nCep = Number(elementCep.value);
    requisicaoCep = fetch(`https://viacep.com.br/ws/${nCep}/json/`)
    console.log(requisicaoCep)

}