// https://github.com/axios/axios
// posto no index.html <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

/*fetch('pessoas.json')
.then(response => response.json()) // retorna nova promise // obejto json convertido em objeto js
.then(json => imprimirDadosPagina(json))
.catch(error => console.log(error))*/

// substitui fetch
axios('pessoas.json')
.then(resposta => imprimirDadosPagina(resposta.data)); // nao ha nova promise, entao direto


function imprimirDadosPagina(json) {
    const div = document.querySelector('.resultado');
    const table = document.createElement('table')
    table.setAttribute('class','tabela');
    
    let th = document.createElement('th');
    th.innerHTML = 'NOME';
    table.appendChild(th)

    th = document.createElement('th');
    th.innerHTML = 'EMAIL';
    table.appendChild(th)

    th = document.createElement('th');
    th.innerHTML = 'SAL';
    table.appendChild(th)

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td_nome = document.createElement('td');
        td_nome.innerHTML = pessoa.nome;
        tr.appendChild(td_nome);

        td_nome = document.createElement('td');
        td_nome.innerHTML = pessoa.email;
        tr.appendChild(td_nome);

        td_nome = document.createElement('td');
        td_nome.innerHTML = pessoa.salario;
        tr.appendChild(td_nome);
        
        table.appendChild(tr)
    }
    div.appendChild(table);
}