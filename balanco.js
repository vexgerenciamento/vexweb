import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { firebaseConfig, firebaseApp, app, analytics, db} from "./chaveFirebase.js";
import{getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";


import { datas } from "./datas.js";

var user_final = localStorage.getItem('valueText');
export function balanco()
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