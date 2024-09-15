// Vamos usar fecth para substituir o XMLHttpRequest()

//EXEMPLo
//isto da para fazer com html, json, xml etc todos os formatos de texto!
// carregar arquivo/url, ja é uma promise
// nao vem os dados prontos na resposta
// para convertes
// ver console pagina web
fetch('pagina4.html') // PROMISE!!!!
.then(resposta => {
    if (resposta.status !==200) {
        throw new Error('Nosso erro'); // vai para o catch!!
    }
    // html
    return resposta.text(); // tmb retorna uma promise
})
.then(html => {
    console.log(html);
})
.catch(erro => console.error(erro));


// JA É CRIADO PLEO FETCH
/*
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
};*/

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
    // tmb podia fazer com then como em cima
    try{
        const response = await fetch(href); //ja é get assim
        //console.log(response)
        if (response.status !== 200) {
            throw new Error('Nosso erro'); // vai para o catch!!
        }
        const html = await response.text(); // tem de ter await, se nao tiver o mais proavvel é ter um Promise no estado pending
        carregaResultado(html);
    }
    catch (e) {
        console.log(e);
    };
}

function carregaResultado(response) {
    const div = document.querySelector('.resultado');
    div.innerHTML = response;
}

