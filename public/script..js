function um()
{
    
    document.querySelector('#um').classList.add('active');//Aqui adicionamos a class active ao id 
    document.querySelector('#dois').classList.remove('active');//Aqui removemos a class active do id
    document.querySelector('#tres').classList.remove('active');//Aqui removemos a class active do id
}
function dois()
{
    document.querySelector('#um').classList.remove('active');//Aqui removemos a class active do id
    document.querySelector('#dois').classList.add('active');//Aqui adicionamos a class active ao id 
    document.querySelector('#tres').classList.remove('active');//Aqui removemos a class active do id
}
function tres()
{
    document.querySelector('#um').classList.remove('active');//Aqui removemos a class active do id
    document.querySelector('#dois').classList.remove('active');//Aqui removemos a class active do id
    document.querySelector('#tres').classList.add('active');//Aqui adicionamos a class active ao id 
}
//carrosel
function troca(){
    setTimeout(um, 1000); //EXECUTA, APÓS 1 SEGUNDO, A FUNÇÃO
    setTimeout(dois, 5000);//EXECUTA, APÓS 5 SEGUNDOS, A FUNÇÃO
    setTimeout(tres, 10000);//EXECUTA, APÓS 10 SEGUNDOS, A FUNÇÃO
}
troca();
setInterval(troca, 16000);//EXECUTA A FUNÇÃO NUM INTERVALO DE 16 SEGUNDOS 


document.querySelector('.toggle').onclick = function()
{
    // OBS: O TOGGLE É UMA CLASSLIST QUE FUNCIONA COMO BOOLEAN( TRUE OR FALSE )!
    document.querySelector('.toggle').classList.toggle('active'); //MUDANÇA DO ÍCONE SUPERIOR
    document.querySelector('.menu').classList.toggle('active'); //MUDANÇA DO BACKGROUND
}

document.querySelector('.home_menu').onclick = function()
{
    document.querySelector('.menu').classList.toggle('active'); //MUDANÇA DO ÍCONE SUPERIOR
    document.querySelector('.toggle').classList.toggle('active'); //MUDANÇA DO BACKGROUND
}

document.querySelector('.servico_menu').onclick = function()
{
    document.querySelector('.menu').classList.toggle('active'); //MUDANÇA DO ÍCONE SUPERIOR
    document.querySelector('.toggle').classList.toggle('active'); //MUDANÇA DO BACKGROUND
}

document.querySelector('.sobre_menu').onclick = function()
{
    document.querySelector('.menu').classList.toggle('active'); //MUDANÇA DO ÍCONE SUPERIOR
    document.querySelector('.toggle').classList.toggle('active'); //MUDANÇA DO BACKGROUND
}

document.querySelector('.contato_menu').onclick = function()
{
    document.querySelector('.menu').classList.toggle('active'); //MUDANÇA DO ÍCONE SUPERIOR
    document.querySelector('.toggle').classList.toggle('active'); //MUDANÇA DO BACKGROUND
}

document.querySelector('.equipe_menu').onclick = function()
{
    document.querySelector('.menu').classList.toggle('active'); //MUDANÇA DO ÍCONE SUPERIOR
    document.querySelector('.toggle').classList.toggle('active'); //MUDANÇA DO BACKGROUND
}