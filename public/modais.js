
//---------------------------ABRIR MODAL DE CADASTRO---------------------------\\

const openModal = () => document.getElementById('modalCriar').classList.add('active')

//---------------------------ABRIR MODAL DE DELETAR---------------------------\\

const openmodalDeletar = () => document.getElementById('modalDeletar').classList.add('active')

//---------------------------ABRIR MODAL DE EDITAR---------------------------\\

function openmodalEditar() {document.getElementById('modalEditar').classList.add('active');}

//---------------------------FECHAR MODAL DE CADASTRO---------------------------\\

const closeModal = () => {document.getElementById('modalCriar').classList.remove('active')}

//---------------------------FECHAR MODAL DE DELETAR---------------------------\\

const closemodalDeletar = () => {document.getElementById('modalDeletar').classList.remove('active')}

//---------------------------FECHAR MODAL DE EDITAR---------------------------\\

const closemodalEditar = () => {document.getElementById('modalEditar').classList.remove('active')}

//---------------------------ATRIBUINDO O OPENMODAL---------------------------\\

document.getElementById('cadastrarCliente').addEventListener('click', openModal)

//---------------------------ATRIBUINDO O CLOSEMODAL---------------------------\\

document.getElementById('modalCloseCriar').addEventListener('click', closeModal)

//---------------------------ATRIBUINDO O OPENMODALDELETAR---------------------------\\

document.getElementById('modalClose1').addEventListener('click', closemodalDeletar)

//---------------------------ATRIBUINDO O CLOSEMODALDELETAR---------------------------\\

document.getElementById('modalCloseEditar').addEventListener('click', closemodalEditar)
