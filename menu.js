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
