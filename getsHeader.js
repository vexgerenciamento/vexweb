import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
import { firebaseConfig, firebaseApp, app, analytics, db} from "./chaveFirebase.js";
import{getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";


import { datas } from "./datas.js";

import {Descripta, Asc, Chr} from "./CRIPTOGRAFIA.js"

var user_final = localStorage.getItem('JaM902#');
user_final = Descripta(user_final);
var nome = localStorage.getItem('JaM903#');
nome = Descripta(nome);
var senha = localStorage.getItem('JaM904#');
senha = Descripta(senha);

export function GetGanho(){
    var num = document.getElementById('guardaOmes').textContent;
    var nomeMes = datas(num);
    const dbRef = ref(db, "users/"+user_final+"/"+nomeMes+"/ganhoMensal/");
    onValue(dbRef,(snapshot)=>{    
    var ganhos = [];
    snapshot.forEach(childSnapshot =>{
    ganhos.push(childSnapshot.val());
    document.getElementById('ganhoInicial').textContent = `R$ ${ganhos}`;      
    
    });
    });
    
    }
    
export function GetBalanco(){
        var num = document.getElementById('guardaOmes').textContent;
        var nomeMes = datas(num);
    const dbRef = ref(db, "users/"+user_final+"/"+nomeMes+"/balancoMensal/");
    
        onValue(dbRef,(snapshot)=>{    
            var balanco = [];
            snapshot.forEach(childSnapshot =>{
                balanco.push(childSnapshot.val());
        document.getElementById('balanco').textContent = `R$ ${balanco}`;  
        if (balanco >= 0){
            document.getElementById('balanco').style.color = '#0AE90A';
        }else{
            document.getElementById('balanco').style.color = 'red';
        }
     
        });
     
        });
    }
export function GetDespesa(){
    var num = document.getElementById('guardaOmes').textContent;
    var nomeMes = datas(num);
    const dbRef = ref(db, "users/"+user_final+"/"+nomeMes+"/despesaMensal/");
    
    onValue(dbRef,(snapshot)=>{    
    var despesas = [];
    snapshot.forEach(childSnapshot =>{
    despesas.push(childSnapshot.val());
    document.getElementById('despesaInicial').textContent = `R$ ${despesas}`;        
    });
    
    });
}