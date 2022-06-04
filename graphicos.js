var user_final = localStorage.getItem('valueText');

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd8BHepAbgzsZF0Ig8NRgsnTPRKvYkO4g",
  authDomain: "vexv1-adc55.firebaseapp.com",
  databaseURL: "https://vexv1-adc55-default-rtdb.firebaseio.com",
  projectId: "vexv1-adc55",
  storageBucket: "vexv1-adc55.appspot.com",
  messagingSenderId: "827882444760",
  appId: "1:827882444760:web:3b65498f6fe2161d1244ad",
  measurementId: "G-FBJX3WSQDX"
};



 const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import{getDatabase, ref, get, set, child, update, remove, onValue}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
const db = getDatabase();



function mesAnterior(){
var mes = parseInt(document.getElementById('guardaOmes').textContent);
mes = mes-1;
mes = parseInt(mes);
if(mes<1){ mes = 12}
document.getElementById('guardaOmes').textContent = mes;

BarChart.config.data = createBarChartData();
setTimeout(function() { BarChart.update(); },800);
DoughnutChart1.config.data = createDoughnutChartData("Receita");
setTimeout(function() {  DoughnutChart1.update(); },800);
DoughnutChart2.config.data = createDoughnutChartData("Despesa");
setTimeout(function() {  DoughnutChart2.update(); },800);
MetaChart.config.data = createMetaChartData();
setTimeout(function() { MetaChart.update(); },800);

GetAllDataRT();
datas(mes);
}
function mesPosterior(){
var mes = parseInt(document.getElementById('guardaOmes').textContent);
mes = mes+1;
mes = parseInt(mes);
if(mes>12){ mes = 1}
document.getElementById('guardaOmes').textContent = mes;

BarChart.config.data = createBarChartData();
setTimeout(function() { BarChart.update(); },800);
DoughnutChart1.config.data = createDoughnutChartData("Receita");
setTimeout(function() {  DoughnutChart1.update(); },800);
DoughnutChart2.config.data = createDoughnutChartData("Despesa");
setTimeout(function() {  DoughnutChart2.update(); },800);
MetaChart.config.data = createMetaChartData();
setTimeout(function() { MetaChart.update(); },800);

GetAllDataRT();
datas(mes);
}

function GetAllDataRT(){

var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);

const dbRef = ref(db,"users/"+user_final+"/"+nomeMes+"/metas/");

onValue(dbRef,(snapshot)=>{
var metas = [];
snapshot.forEach(childSnapshot =>{
metas.push(childSnapshot.val());
});
AddAll(metas);
});
}

function AddAll(users){

tbody.innerHTML="";
users.forEach(element => {
AddItemTb(element.titulo, element.tipo, element.periodo, element.valor, element.id);

});

}

function GetGanho(){
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

function GetBalanco(){
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
const dbRef = ref(db, "users/"+user_final+"/"+nomeMes+"/balancoMensal/");

onValue(dbRef,(snapshot)=>{    
var balanco = [];
snapshot.forEach(childSnapshot =>{
balanco.push(childSnapshot.val());
document.getElementById('balanco').textContent = `R$ ${balanco}`;  
if (parseFloat(document.getElementById('balanco').textContent) >= 0){
document.getElementById('balanco').style.color = 'green';

}    else {
document.getElementById('balanco').style.color = 'red';
}

});

});
}
function GetDespesa(){
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


var nomeMes = datas();

function datas(mes){


if(mes == undefined){
var data = new Date()
var mes = String(data.getMonth() + 1);
document.getElementById('guardaOmes').textContent = `${mes}`;
}
mes = document.getElementById('guardaOmes').textContent
switch(mes){
case '1':
nomeMes = "jan";
document.getElementById('mes').textContent = "Janeiro de 2022";

return nomeMes;

break;
case '2':
nomeMes = "fev"; 
document.getElementById('mes').textContent = "Fevereiro de 2022";

return nomeMes;

break;
case '3':
nomeMes = "mar"; 
document.getElementById('mes').textContent = "Março de 2022";

return nomeMes;
break;
case '4':
nomeMes = "abril"; 
document.getElementById('mes').textContent = "Abril de 2022";

return nomeMes;
break;
case '5':
nomeMes = "maio"; 
document.getElementById('mes').textContent = "Maio de 2022";

return nomeMes;
break;
case '6':
nomeMes = "jun"; 
document.getElementById('mes').textContent = "Junho de 2022";


return nomeMes;
break;
case '7':
nomeMes = "jul"; 
document.getElementById('mes').textContent = "Julho de 2022";


return nomeMes;
break;
case '8':
nomeMes = "ago"; 
document.getElementById('mes').textContent = "Agosto de 2022";


return nomeMes;
break;

case '9':
nomeMes = "set"; 
document.getElementById('mes').textContent = "Setembro de 2022";


return nomeMes;
break;

case '10':
nomeMes = "out"; 
document.getElementById('mes').textContent = "Outubro de 2022";


return nomeMes;
break;

case '11':
nomeMes = "nov"; 
document.getElementById('mes').textContent = "Novembro de 2022";


return nomeMes;
break;

case '12':
nomeMes = "dez"; 
document.getElementById('mes').textContent = "Dezembro de 2022";

return nomeMes;
break;

}
}

document.getElementById('proximo').addEventListener('click', mesPosterior);
document.getElementById('anterior').addEventListener('click', mesAnterior);

var nomeMes = datas();
var biscu = [];
var tbody = document.getElementById('tbody');
function AddItemTb(titulo, valor){          
let trow = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
biscu.push([titulo, valor]);              
}

var ID = 0;
var tbody = document.getElementById("tbody");

function addItemTd(arraylabels, arraydata){
let trow = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');         

        td1.innerHTML=arraylabels[ID];
        td2.innerHTML=arraydata[ID];
        ID++;

trow.appendChild(td1);
trow.appendChild(td2);

tbody.appendChild(trow);
}        

function random_rgb() {
var o = Math.round, r = Math.random, s = 255;
return "rgb(" + o(r()*s) + ", " + o(r()*s) + ", " + o(r()*s) + ")";
}

var doughnut_chart1 = document.getElementsByClassName("doughnut-chart1");
var DoughnutChart1 = new Chart(doughnut_chart1, {
type: "doughnut",
data: createDoughnutChartData("Receita"),
});

var doughnut_chart2 = document.getElementsByClassName("doughnut-chart2");
var DoughnutChart2 = new Chart(doughnut_chart2, {
type: "doughnut",
data: createDoughnutChartData("Despesa"),
});

var line_chart = document.getElementsByClassName("line-chart");
var LineChart = new Chart(line_chart, {
type: "line",
data: createLineChartData(),
options: {
    responsive: true,
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: 'xy'
            },
            zoom: {
                wheel: {
                    enabled: true
                },
                pinch: {
                    enabled: true
                },
                mode: 'xy',
            },
        }
    }
}
});

var bar_chart = document.getElementsByClassName("bar-chart");
var BarChart = new Chart(bar_chart , {
type: 'bar',
data: createBarChartData(),
options: {
    plugins: {
        legend: {
            display: false
        }
    }
}
});

var meta_chart = document.getElementsByClassName("meta-chart");
var MetaChart = new Chart(meta_chart , {
type: 'bar',
data: createMetaChartData(),
options: {
    plugins: {
        legend: {
            display: false
        }
    }
}
})

function createLineChartData(){
var meses = ["jan", "fev", "mar", "abril", "maio", "jun"];
var balancos = []; 
var ganhos = [];
var despesas = [];
for (var i = 0; i<meses.length; i++){
    const dbRef = ref(db, "users/"+user_final+"/"+meses[i]+"/balancoMensal/");
    onValue(dbRef,(snapshot)=>{                                          
        snapshot.forEach(childSnapshot =>{
        balancos.push(childSnapshot.val());                 
        });
    });                                   
}
for (var i = 0; i<meses.length; i++){
    const dbRef = ref(db, "users/"+user_final+"/"+meses[i]+"/ganhoMensal/");
    onValue(dbRef,(snapshot)=>{                                          
        snapshot.forEach(childSnapshot =>{
        ganhos.push(childSnapshot.val());                 
        });
    });                                   
}
for (var i = 0; i<meses.length; i++){
    const dbRef = ref(db, "users/"+user_final+"/"+meses[i]+"/despesaMensal/");
    onValue(dbRef,(snapshot)=>{                                          
        snapshot.forEach(childSnapshot =>{
        despesas.push(childSnapshot.val());                 
        });
    });                                   
}        

var data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [{
        label: "Balanços Mensais",
        data: balancos,
        borderColor: '#f5c116',
        tension: 0.2
    },
    {
        label: "Ganhos Mensais",
        data: ganhos,
        borderColor: 'rgb(10, 233, 10)',
        tension: 0.2,
    },
    {
        label: "Despesas Mensais",
        data: despesas,
        borderColor: 'rgb(255, 0, 0',
        tension: 0.2
    }], 
};
return data;            
}      

var selectBoxBar;
window.getSelectBoxBarValue = function(){
selectBoxBar = document.getElementById('selectBoxBar').value;
return selectBoxBar;
}  

var selectBoxBar2;
window.getSelectBoxBarValue2 = function(){
selectBoxBar2 = document.getElementById('selectBoxBar2').value;
return selectBoxBar2;
}  

function createBarChartData(){   
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
var gastos = [];
var arrayValor = [];
var arrayTitulo = [];
const dbRef = ref(db, "users/"+user_final+"/"+nomeMes+"/gastos/");
onValue(dbRef,(snapshot)=>{    
    snapshot.forEach(childSnapshot =>{
        gastos.push(childSnapshot.val());
    });                
    gastos.forEach(element => {
        if(element.tipo != getSelectBoxBarValue()){
            return;
        }else{
            // SE DER MERDA FOI ISSO
        var valor = parseFloat(element.valor);
        var titulo = element.titulo;
        arrayValor.push(valor);
        arrayTitulo.push(titulo);
        }                                    
    });
});

var data = {
    labels: arrayTitulo,
    datasets: [{
        data: arrayValor,
        backgroundColor: ["#f5c116", "#202020"],
        maxBarThickness: 120,
    }]

}
    return data;
}  

function createDoughnutChartData(tipo){ 
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
var gastos = [];
var arrayValores = [0, 0, 0, 0, 0, 0, 0, 0];
var arrayTipos = ["Alimentação", "Entretenimento", "Habitação", "Salário", "Saúde", "Seguros", "Transportes", "Outros"];
const dbRef = ref(db, "users/"+user_final+"/"+nomeMes+"/gastos/");
onValue(dbRef,(snapshot)=>{    
    snapshot.forEach(childSnapshot =>{
        gastos.push(childSnapshot.val());
    });
    gastos.forEach(element => {
        if(element.transferencia != tipo){
            for(var i = 0; i<=arrayValores.length; i++){
                if (element.tipo == arrayTipos[i]){
                    arrayValores[i] = arrayValores[i] + parseFloat(element.valor);
                }
            }
        }
    }); 
});

var data = {
    labels: arrayTipos,
    datasets: [{
        data: arrayValores,
        backgroundColor: ["#ff4b2b", "#db2d1f", "#8dd34e", "#31830e", "#2cc5f4", "#1675af", "#8e6eb7", "#69419d"],
        hoverOffset: 7
    }]     
}
return data;
}

function createMetaChartData() {
var num = document.getElementById('guardaOmes').textContent;
var nomeMes = datas(num);
var gastos = [];
var metas_ = [];
var valor = 0.0;
var metas = 0.0;
const dbRef = ref(db, "users/"+user_final+"/"+nomeMes+"/gastos/");
onValue(dbRef,(snapshot)=>{    
    snapshot.forEach(childSnapshot =>{
        gastos.push(childSnapshot.val());
    });                
    gastos.forEach(element => {
        if(element.tipo != getSelectBoxBarValue2()){
            return;
        }else{
        valor = valor + parseFloat(element.valor);
        }                                    
    });
});
const dbRef1 = ref(db, "users/"+user_final+"/"+nomeMes+"/metas/");
onValue(dbRef1,(snapshot)=>{
    snapshot.forEach(childSnapshot =>{
        metas_.push(childSnapshot.val());
    });
    metas_.forEach(element => {
        if(element.tipo != getSelectBoxBarValue2()){
            return;
        }else{
            metas = metas + parseFloat(element.valor);
        }
    });
});

var data = {
    labels: ["Gastos", "Metas"],
    datasets: [{
        data: [valor, metas],
        backgroundColor: ["#ff0000", "#0ae90a"]
    }],
}
return data;
}

DoughnutChart1.config.data = createDoughnutChartData("Receita");
setTimeout(function() {  DoughnutChart1.update(); },800);

DoughnutChart2.config.data = createDoughnutChartData("Despesa");
setTimeout(function() {  DoughnutChart2.update(); },800);

LineChart.config.data = createLineChartData();
setTimeout(function() { LineChart.update(); },800);

BarChart.config.data = createBarChartData();
setTimeout(function() { BarChart.update(); },800);

MetaChart.config.data = createMetaChartData();
setTimeout(function() { MetaChart.update(); },800);               

const selectElement2 = document.querySelector('#selectBoxBar2')
selectElement2.addEventListener('change', (event) => {
getSelectBoxBarValue2();
MetaChart.config.data = createMetaChartData();
MetaChart.update();            
});

const selectElement = document.querySelector('#selectBoxBar');
selectElement.addEventListener('change', (event) => {
getSelectBoxBarValue();
BarChart.config.data = createBarChartData();
BarChart.update();
});

window.lineResetZoom = function() {
LineChart.resetZoom();
}