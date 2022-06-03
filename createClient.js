import { datas } from "./datas.js";

import {db} from "./chaveFirebase.js";

import{ref,set} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

import {GetGanho} from "./getsHeader.js";

import { balanco } from "./balanco.js";

var user_final = localStorage.getItem('valueText');

export const createClient = (client) => {
    var nome = document.getElementById('titulo').value;
    var tipo = document.getElementById('categoria').value;
    var valor = document.getElementById('valor').value;
    valor = parseFloat(valor).toFixed(2);
    
    var transferencia = document.getElementById('transferencia').value;
    var ganhos = document.getElementById('ganhosInicial');
    var num = document.getElementById('guardaOmes').textContent;
    var nomeMes = datas(num);
    var data = new Date();
    var segundos = data.getSeconds();
    var minutos = data.getMinutes();
    var horas = data.getHours();
    var dias =  data.getDate();
    var meses = data.getMonth()+1;
    var anos = String(data.getFullYear());
    var periodo = dias+" | "+horas+":"+minutos;
    var id = anos+meses+dias+horas+minutos+segundos;
    
    if((nome=="") || (tipo=="") || (valor=="") ||(periodo=="") ||(transferencia=="")){
    alert('preencha todos os campos');
    }else{
    
    localStorage.setItem('db_client', client);
    set(ref(db, "users/"+user_final+"/"+nomeMes+"/gastos/"+id),
        {
            id: id,
            titulo: nome,
            tipo: tipo,
            valor: valor,
            periodo: periodo,
            transferencia: transferencia
        }
        )
        .then(()=>{
    
          console.log('Faz alguma conta necessária');
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
//-----------RECEBENDO O VALOR DAS DIVS E INPUTS-----------//

var transferencia = document.getElementById('transferencia').value;
var valor = document.getElementById('valor').value;
var ganhoInicial = document.getElementById('ganhoInicial').textContent;
var despesaInicial = document.getElementById('despesaInicial').textContent;



if(transferencia == "Receita"){


//-----------TRANSFORMANDO EM FLOAT E RECEBENDO APENAS NÚMEROS NAS VARIÁVEIS-----------//

var valorFloat = parseFloat(valor);
var ganhoInicialNum = ganhoInicial.replace(',', '.').replace('R$', '');
var ganhoInicialFloat = parseFloat(ganhoInicialNum);

//-----------CÁLCULO FINAL-----------//

var ganhoFinal = valorFloat + ganhoInicialFloat;
ganhoFinal = parseFloat(ganhoFinal).toFixed(2);

set(ref(db, "users/"+user_final+"/"+nomeMes+"/ganhoMensal/"),
    {
       ganhoMensal: ganhoFinal
    }
    )
    .then(()=>{
        GetGanho();
    });

//-----------MUDANÇA DE VALORES E CORES NA TELA-----------//

balanco();

} else 
{


//-----------TRANSFORMANDO EM FLOAT E RECEBENDO APENAS NÚMEROS NAS VARIÁVEIS-----------//

var valorFloat = parseFloat(valor);
var despesaInicialNum = despesaInicial.replace(',', '.').replace('R$', '');
var despesaInicialFloat = parseFloat(despesaInicialNum);

//-----------CÁLCULO FINAL-----------//

var despesaFinal = despesaInicialFloat + valorFloat;
var despesaFinal = parseFloat(despesaFinal).toFixed(2);
set(ref(db, "users/"+user_final+"/"+nomeMes+"/despesaMensal/"),
    {
        despesaMensal: despesaFinal
    }
    )
    .then(()=>{
        
    });


//-----------MUDANÇA DE VALORES E CORES NA TELA-----------//

document.getElementById('despesaInicial').textContent = `R$${despesaFinal}`;
balanco();

} 
          document.getElementById('titulo').value = "";
          document.getElementById('categoria').value = "";
          document.getElementById('valor').value = "";
          document.getElementById('transferencia').value = "";  
         
        })
        .catch((error)=>{
    
        })}{
    
        }
    }

function calculos(){
    console.log('Faz alguma conta necessária');
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
//-----------RECEBENDO O VALOR DAS DIVS E INPUTS-----------//

var transferencia = document.getElementById('transferencia').value;
var valor = document.getElementById('valor').value;
var ganhoInicial = document.getElementById('ganhoInicial').textContent;
var despesaInicial = document.getElementById('despesaInicial').textContent;



if(transferencia == "Receita"){


//-----------TRANSFORMANDO EM FLOAT E RECEBENDO APENAS NÚMEROS NAS VARIÁVEIS-----------//

var valorFloat = parseFloat(valor);
var ganhoInicialNum = ganhoInicial.replace(',', '.').replace('R$', '');
var ganhoInicialFloat = parseFloat(ganhoInicialNum);

//-----------CÁLCULO FINAL-----------//

var ganhoFinal = valorFloat + ganhoInicialFloat;
ganhoFinal = parseFloat(ganhoFinal).toFixed(2);

set(ref(db, "users/"+user_final+"/"+nomeMes+"/ganhoMensal/"),
    {
       ganhoMensal: ganhoFinal
    }
    )
    .then(()=>{
        GetGanho();
    });

//-----------MUDANÇA DE VALORES E CORES NA TELA-----------//

balanco();

} else 
{


//-----------TRANSFORMANDO EM FLOAT E RECEBENDO APENAS NÚMEROS NAS VARIÁVEIS-----------//

var valorFloat = parseFloat(valor);
var despesaInicialNum = despesaInicial.replace(',', '.').replace('R$', '');
var despesaInicialFloat = parseFloat(despesaInicialNum);

//-----------CÁLCULO FINAL-----------//

var despesaFinal = despesaInicialFloat + valorFloat;
var despesaFinal = parseFloat(despesaFinal).toFixed(2);
set(ref(db, "users/"+user_final+"/"+nomeMes+"/despesaMensal/"),
    {
        despesaMensal: despesaFinal
    }
    )
    .then(()=>{
        
    });


//-----------MUDANÇA DE VALORES E CORES NA TELA-----------//

document.getElementById('despesaInicial').textContent = `R$${despesaFinal}`;
balanco();

}
}