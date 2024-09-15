// AJAX rquesition
// para fazer a requisicao precisaria de um servidor
// para isso uso o live server  daqui (caminho de http), e nao de file

// XMLHttpRequest - requesicao de qq tipo de dados, web scrapping

// AJAX com promises

const request = (obj) => {
    return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true); // verbo HTTP (GET, POST)
    xhr.send(null); // para post!!!

    // ja temos a resposta do server!!
    xhr.addEventListener('load', (e) => {
        if (xhr.status >= 200 && xhr.status<300) {
            resolve(xhr.responseText); // mandamos para esta funcao o texto da requisicao 
        }
        else {
            reject(xhr.statusText);
        }
    }) // evento de load
})
};

document.addEventListener('click', (e) => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase(); // buscar a tag
    if (tag === 'a') {
        e.preventDefault(); //para nao ir para a pagina!
        carregaPagina(elemento);
    }

});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    try{
    const response = await request({ // promise
        method: 'GET',
        url: href });
    carregaResultado(response); // so faz dps do response
    }
    catch(e) {
        console.log(e);
    }
    //.then((response) => carregaResultado(response))
    //.catch((error) => console.log(error));
}

function carregaResultado(response) {
    const div = document.querySelector('.resultado');
    div.innerHTML = response;
}
