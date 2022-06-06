function sair(){

var senha = '';
var nome = '';
var user_final = '';

localStorage.setItem('JaM902#', user_final);
localStorage.setItem('JaM903#', nome);
localStorage.setItem('JaM904#', senha);

var user_final = localStorage.getItem('JaM902#');
var nome = localStorage.getItem('JaM903#');
var senha = localStorage.getItem('JaM904#');

if((user_final== null) || (user_final==""))
{
    window.location.href = 'index.html';
} 
else if((senha==null) || (senha==null))
{
    window.location.href = 'index.html';
}
else if((nome==null) || (nome==null) )
{
    window.location.href = 'index.html';
}

}