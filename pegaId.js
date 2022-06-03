function pegaIdEditar(num){

    document.getElementById('IdVerdadeiro').innerHTML = `<input id="idEditar" value="${num}" hidden> </input>`;
    //document.getElementById("editar").innerHTML = '<div class="sc-bkzYnD kLxSip">&nbsp;</div><button class="sc-hHfuMS dcAQVR" id="editarFinal">Editar</button>'
    return num;
    
    }
    
    //---------------------------PEGAR ID PARA EXCLUIR---------------------------\\
    
function pegaId(num){
    
    document.getElementById('IdVerdadeiro').innerHTML = `<input id="teste" value="${num}" hidden> </input>`;
    openmodalDeletar();
    return num;
    }