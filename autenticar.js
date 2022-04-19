
var user_final = localStorage.getItem('valueText');
var nome = localStorage.getItem('nome');
var senha = localStorage.getItem('senha');
if((user_final== null) || (user_final=="")){
    window.location.href = 'pag_ini.html';
} else if((senha==null) || (senha==null)){
    window.location.href = 'pag_ini.html';
}
else if((nome==null) || (nome==null) ){
    window.location.href = 'pag_ini.html';
}