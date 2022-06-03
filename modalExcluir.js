//---------------------------ABRIR MODAL DE DELETAR---------------------------\\

const openmodalDeletar = () => document.getElementById('modalDeletar').classList.add('active');

//---------------------------FECHAR MODAL DE DELETAR---------------------------\\

const closemodalDeletar = () => {document.getElementById('modalDeletar').classList.remove('active');}

//---------------------------ATRIBUINDO O CLOSEMODALDELETAR---------------------------\\
document.getElementById('modalCloseExcluir').addEventListener('click', closemodalDeletar);