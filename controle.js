






var user_final = localStorage.getItem('valueText');

var senha_final = localStorage.getItem('senha');
var usuario_logado = localStorage.getItem('nome');


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { firebaseConfig, firebaseApp, app, analytics, db} from "./chaveFirebase.js";
import{getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

//------------------------------DECLARANDO VÁRIAVEIS GLOBAIS------------------------------//
var btn_adicionar = document.getElementById("adicionar");

function mesAnterior(){
var mes = parseInt(document.getElementById('guardaOmes').textContent);
mes = mes-1;
mes = parseInt(mes);
console.log(mes);
if(mes<1){ mes = 12}
document.getElementById('guardaOmes').textContent = mes;
GetAllDataRT();
GetGanho();
GetDespesa();
GetBalanco();
//balanco();
datas(mes);
}
function mesPosterior(){
var mes = parseInt(document.getElementById('guardaOmes').textContent);
mes = mes+1;
mes = parseInt(mes);
console.log(mes);
if(mes>12){ mes = 1}
document.getElementById('guardaOmes').textContent = mes;
GetAllDataRT();
GetGanho();
GetDespesa();
GetBalanco();
//balanco();
datas(mes);
}



import { datas } from "./datas.js";
datas();
import { GetBalanco, GetGanho, GetDespesa } from "./getsHeader.js";







function balanco()
{
    
    
    var num = document.getElementById('guardaOmes').textContent;
    var nomeMes = datas(num);
//-----------RECEBENDO O VALOR DAS DIVS-----------//

    var ganhoInicial = document.getElementById('ganhoInicial').textContent;
    var despesaInicial = document.getElementById('despesaInicial').textContent;

//-----------RECEBENDO APENAS OS NÚMEROS DAS VARIÁVEIS-----------//

    var ganhoInicialNum = ganhoInicial.replace(',', '.').replace('R$', '');
    var despesaInicialNum = despesaInicial.replace(',', '.').replace('R$', '');

//-----------PASSANDO PARA FLOAT-----------//

    var ganhoInicialFloat = parseFloat(ganhoInicialNum);
    var despesaInicialFloat = parseFloat(despesaInicialNum);

//-----------CONTA FINAL-----------//

    var balanco = ganhoInicialFloat - despesaInicialFloat;

    balanco = parseFloat(balanco).toFixed(2);


    set(ref(db, "users/"+user_final+"/"+nomeMes+"/balancoMensal/"),
            {
                balancoMensal: balanco
            }
            )
            .then(()=>{
                
            });



    
//-----------MUDANÇA DE VALORES E CORES NA TELA-----------//


}





function calculosDelete(valor_final, transferencia_final, valorDB){
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);   
if(transferencia_final == "Receita"){


//funçao get para pegar do REALTIME DB



 var resultado = valorDB - valor_final ;
 resultado = parseFloat(resultado).toFixed(2);
//document.getElementById('ganhoInicial').textContent = `R$${resultado}`;

//set para o banco de Dados

 document.getElementById('ganhoInicial').textContent = `R$${resultado}`;
 set(ref(db, "users/"+user_final+"/"+nomeMes+"/ganhoMensal/"),
    {
       ganhoMensal: resultado
    }
    )
    .then(()=>{
        GetGanho();
    });

  balanco();

  
}else
{ 
var resultado = valorDB - valor_final ;
resultado = parseFloat(resultado).toFixed(2);



document.getElementById('despesaInicial').textContent = `R$${resultado}`;

set(ref(db, "users/"+user_final+"/"+nomeMes+"/despesaMensal/"),
    {
       despesaMensal: resultado
    }
    )
    .then(()=>{
        GetDespesa();
        balanco();
    });

balanco();
}
}



function calculosEditarParte1(num)
{
//1 - SUBTRAI
var nomeMes = datas(num);
const dbref = ref(db);
get(child(dbref,"users/"+user_final+"/"+nomeMes+"/gastos/"+num)).then((snapshot)=>{
   if(snapshot.exists()){
       var valor_final = parseFloat(snapshot.val().valor).toFixed(2);
       var transferencia_final = snapshot.val().transferencia; 
    }
    

    if(transferencia_final == "Receita"){


    var receita = document.getElementById('ganhoInicial').textContent.replace(',', '.').replace('R$', '');
    var resultado = parseFloat(receita) - valor_final;
    resultado = parseFloat(resultado);
        


    update(ref(db,"users/"+user_final+"/"+nomeMes+"/ganhoMensal/"),{
        ganhoMensal: resultado
    }
    );
    
} else{

    var receita = document.getElementById('despesaInicial').textContent.replace(',', '.').replace('R$', '');
    var resultado = parseFloat(receita) - parseFloat(valor_final).toFixed(2);
    resultado = parseFloat(resultado).toFixed(2);
    valor_final = parseFloat(valor_final).toFixed(2);


    update(ref(db,"users/"+user_final+"/"+nomeMes+"/despesaMensal/"),{
        despesaMensal: resultado
    }
    );
}
});




}

function calculosEditarParte2(num)
{   
var nomeMes = datas(num);
const dbref = ref(db);
get(child(dbref,"users/"+user_final+"/"+nomeMes+"/gastos/"+num)).then((snapshot)=>{
   if(snapshot.exists()){
       var valor_final = parseFloat(snapshot.val().valor).toFixed(2);
       var transferencia_final = snapshot.val().transferencia; 
    }

    if(transferencia_final == "Receita"){

    
    var receita = document.getElementById('ganhoInicial').textContent.replace(',', '.').replace('R$', '');
    var resultado = parseFloat(receita) + parseFloat(valor_final);
    valor_final = parseFloat(valor_final).toFixed(2);

    resultado = parseFloat(resultado).toFixed(2);
    console.log(resultado);

    update(ref(db,"users/"+user_final+"/"+nomeMes+"/ganhoMensal/"),{
        ganhoMensal: resultado
    }
    
    );
    balanco();
    
} else{

    
    var receita = document.getElementById('despesaInicial').textContent.replace(',', '.').replace('R$', '');
    var resultado = parseFloat(receita) + parseFloat(valor_final);
    valor_final = parseFloat(valor_final).toFixed(2);

    resultado = parseFloat(resultado).toFixed(2);

    update(ref(db,"users/"+user_final+"/"+nomeMes+"/despesaMensal/"),{
        despesaMensal: resultado
    }
    );
    balanco();
}
});
balanco();
}
//---------------------------CRIAR DADOS---------------------------\\
import { createClient } from "./createClient.js";


//---------------------------LER E MOSTRAR DADOS---------------------------\\
var valores = [];      
var tbody = document.getElementById('tbody');

//-------------------RECEBENDO TODO O SNAPCHOT DO DB-------------------\\

function GetAllDataRT(){
var num = document.getElementById('guardaOmes').textContent;
console.log(num);
var nomeMes = datas(num);
const dbRef = ref(db,"users/"+user_final+"/"+nomeMes+"/gastos/");

onValue(dbRef,(snapshot)=>{
var gastos = [];
snapshot.forEach(childSnapshot =>{
gastos.push(childSnapshot.val());
});
AddAll(gastos);
});
    }

GetAllDataRT();
//-------------------RECEBENDO DADOS DO SNAPCHOT-------------------\\

function AddAll(users){

tbody.innerHTML="";
users.forEach(element => {
AddItemTb(element.titulo, element.tipo, element.periodo ,element.transferencia, element.valor, element.id);
});
}

//-------------------CRIANDO LINHAS DA TABELA-------------------\\
function AddItemTb(titulo, tipo, periodo ,transferencia, valor, id){

let trow = document.createElement('tr');

let td1 = document.createElement('td');

let td2 = document.createElement('td');

let td3 = document.createElement('td');

let td4 = document.createElement('td');

let td5 = document.createElement('td');

let td6 = document.createElement('td');


valores.push([titulo, tipo, periodo, transferencia, valor, id]);
td1.innerHTML=titulo; 
td2.innerHTML=tipo; 
td3.innerHTML=periodo;
td4.innerHTML=transferencia;
td5.innerHTML= 'R$ '+valor;

trow.appendChild(td1);
trow.classList.add("sc-gKseQn");
//
td1.classList.add("sc-iBPTik"); 
td1.classList.add("gZUaaB"); 
td1.classList.add("alignTitulo");
trow.appendChild(td2);
//
td2.classList.add("sc-fubCzh");

if (tipo == "Alimentação")
{
td2.classList.add("alimentacao");
}else if(tipo == "Entretenimento"){
td2.classList.add("entretenimento");
}else if(tipo == "Habitação"){
td2.classList.add("habitacao");
}else if(tipo == "Salário"){
td2.classList.add("salario");
}
else if(tipo == "Saúde"){
td2.classList.add("saude");
}else if(tipo == "Seguros"){
td2.classList.add("seguros");
}
else if(tipo == "Transportes"){
td2.classList.add("transportes");
}else if(tipo == "Outros"){
td2.classList.add("outros");
}

td2.classList.add("alignCategoria");
trow.appendChild(td3);
//
td3.classList.add("sc-iBPTik"); 
td3.classList.add("gZUaaB"); 
td3.classList.add("alignData");
trow.appendChild(td4);
//
td4.classList.add("sc-iBPTik"); 
td4.classList.add("gZUaaB"); 
td4.classList.add("alignData");
trow.appendChild(td5);  
//
td5.classList.add("sc-pGacB"); 
td5.classList.add("fZFMZi"); 
td5.classList.add("alignValor");

var Controle = document.createElement("div");
var Editar = document.createElement("div");


td6.innerHTML = '<div class="butao_teste alignAcoes"><button type="button" class="butao" onclick="pegaId('+id+')" ><img src="img/outline_delete_white_24dp.png"></button><button type="button" class="butao" id = "'+id+'"  onclick="pegaIdEditar(id)"><img src="img/outline_edit_white_24dp.png"></button></div>'

trow.appendChild(td6);

tbody.appendChild(trow);

document.getElementById(id).addEventListener('click',selectData);

GetGanho();
GetDespesa();
GetBalanco();

}

//---------------------------EXLUIR DADOS---------------------------\\
function deleteData(){
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);  var num = String(document.getElementById('teste').value).trim();
DadosParaOCalculoExcluir(num);

remove(ref(db,"users/"+user_final+"/"+nomeMes+"/gastos/"+num),{
})
.then(()=>{

closemodalDeletar();

})
.catch((error)=>{

});
}

function DadosParaOCalculoExcluir(id){
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
const dbref = ref(db);
get(child(dbref,"users/"+user_final+"/"+nomeMes+"/gastos/"+id)).then((snapshot)=>{
   if(snapshot.exists()){
       var valor_final = parseFloat(snapshot.val().valor);
       var transferencia_final = snapshot.val().transferencia; 

       if(transferencia_final == "Receita"){
        get(child(dbref,"users/"+user_final+"/"+nomeMes+"/ganhoMensal/")).then((snapshot)=>{
            var valorDB = snapshot.val().ganhoMensal;


            calculosDelete(valor_final, transferencia_final, valorDB);
        });
       }else{
           get(child(dbref,"users/"+user_final+"/"+nomeMes+"/despesaMensal/")).then((snapshot)=>{
            var valorDB = snapshot.val().despesaMensal;


            calculosDelete(valor_final, transferencia_final, valorDB);
        });}
   }else{
   }
})
.catch((error)=>{
 
});
}

//função do update
function alterData(){
var numA = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(numA);
var nome = document.getElementById('titulo').value;
var tipo = document.getElementById('categoria').value;
var valor = document.getElementById('valor').value;
valor = parseFloat(valor).toFixed(2);
var transferencia = document.getElementById('transferencia').value;
var num = String(document.getElementById('idEditar').value).trim();

calculosEditarParte1(num);

    update(ref(db,"users/"+user_final+"/"+nomeMes+"/gastos/"+num),{
        titulo: nome,
        tipo: tipo,
        valor: valor,
        transferencia: transferencia
    })
    .then(()=>{

        calculosEditarParte2(num);
        document.getElementById('titulo').value = "";
        document.getElementById('categoria').value = "";
        document.getElementById('valor').value = "";
        document.getElementById('transferencia').value = "";
        document.querySelector('#editar').classList.add('sumiu');
        document.querySelector('#adicionar').classList.remove('sumiu');

      

   })
   .catch((error)=>{
        
   });
}

//---------------------------LER E MOSTRAR DADOS NOS MODAIS---------------------------\\

function selectData(){
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
var num = String(document.getElementById('idEditar').value).trim();


const dbref = ref(db);
get(child(dbref,"users/"+user_final+"/"+nomeMes+"/gastos/"+num)).then((snapshot)=>{
    if(snapshot.exists()){
        document.getElementById('titulo').value = snapshot.val().titulo;
        document.getElementById('categoria').value = snapshot.val().tipo;
        document.getElementById('valor').value = snapshot.val().valor;
    
        document.getElementById('transferencia').value = snapshot.val().transferencia; 
       document.querySelector('#editar').classList.remove('sumiu');
       document.querySelector('#adicionar').classList.add('sumiu');
       
    }else{
      
    }
})
.catch((error)=>{
  
});
}





//------------------------------DECLARANDO AÇÕES DOS BOTÕES------------------------------//

btn_adicionar.addEventListener('click', createClient);
document.getElementById('excluir').addEventListener('click', deleteData);
document.getElementById('editar').addEventListener('click', alterData);
document.getElementById('anterior').addEventListener('click', mesAnterior);
document.getElementById('proximo').addEventListener('click', mesPosterior);




