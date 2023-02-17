const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const nome = document.querySelector('#name')
const tel = document.querySelector('#phone')
const email = document.querySelector('#city')
const action = document.querySelector('.acao')

let itens
let id

const getItensBD = () => JSON.parse(localStorage.getItem('dbclient')) ?? []
const setItensBD = () => localStorage.setItem('dbclient', JSON.stringify(itens))

function abrirModal(edit = false, index = 0) {
    modal.classList.add('active')
}

function fecharModal(edit = false, index = 0) {
    modal.classList.remove('active')
    alert('Cadastrado com sucesso !')
}

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })
}

loadItens()