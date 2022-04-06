const fetchApi = async () => {
    let elementCep = document.getElementById('numberCep')
    let nCep = Number(elementCep.value);
    
    let response = await fetch(`https://viacep.com.br/ws/${nCep}/json/`)
    if (!response.ok) {
        const err = await response.json()
        return console.log('Ocorreu o seguinte erro:', err.message);
    }
    const data = await response.json();
    console.log(data);
};