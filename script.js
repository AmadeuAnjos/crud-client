const modal = document.querySelector('.modal-container')

function abrirModal(edit = false, index = 0) {
    modal.classList.add('active')
}

function fecharModal(edit = false, index = 0) {
    modal.classList.remove('active')
    alert('Cadastrado com sucesso !')
}

const tempClient = {
    nome: "Johnny",
    email: "anjosbarrosclean@gmail.com",
    telefone: "(11) 99554-14999",
    cidade: "São Bernardo do Campo"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("dbClient", JSON.stringify(dbClient))

//CRUD

//CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
}
const readClient = () => getLocalStorage()

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}