const modal = document.querySelector('.modal-container')

function abrirModal(edit = false, index = 0) {
    modal.classList.add('active')
}

function fecharModal(edit = false, index = 0) {
    modal.classList.remove('active')
    alert('Cadastrado com sucesso !')
}

const tempClient = {
    nome: "Amadeu Anjos",
    email: "anjosbarrosclean@gmail.com",
    telefone: "(11) 99554-14999",
    cidade: "São Bernardo do Campo"
}

//CRUD
const createClient = (client) => {
    localStorage.setItem("db_client", JSON.stringify(client))
}