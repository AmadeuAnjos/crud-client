const modal = document.querySelector('.modal-container')

function abrirModal(edit = false, index = 0) {
    modal.classList.add('active')
}

function fecharModal(edit = false, index = 0) {
    modal.classList.remove('active')
    alert('Cadastrado com sucesso !')
}