import {Descripta, Asc, Chr} from "./CRIPTOGRAFIA.js"

var user_final = localStorage.getItem('JaM902#');
user_final = Descripta(user_final);
var nome = localStorage.getItem('JaM903#');
nome = Descripta(nome);
var senha_local = localStorage.getItem('JaM904#');
senha_local = Descripta(senha_local); 
        
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

        

//------------------------------DECLARANDO VÁRIAVEIS GLOBAIS------------------------------//





function autenticar(){
            const dbref = ref(db);
get(child(dbref,"users/"+user_final)).then((snapshot)=>{

                var nome = snapshot.val().fullname;
                var senha = snapshot.val().password;
                if ((user_final == nome) && (senha_local == senha))
                {   
                }
                else
                {

                    window.location.href = 'index.html';
                } 
                
                
        }).catch((error)=>{
            window.location.href = 'index.html';
        });
        }
        window.onload = autenticar;
        

//------------------------------DECLARANDO VÁRIAVEIS GLOBAIS------------------------------//
var btn_adicionar = document.getElementById("adicionar");

function mesAnterior(){
    var mes = parseInt(document.getElementById('guardaOmes').textContent);
    mes = mes-1;
    mes = parseInt(mes);
    if(mes<1){ mes = 12}
    document.getElementById('guardaOmes').textContent = mes;
    GetAllDataRT();
    GetGanho();
    GetDespesa();
    GetBalanco();

    datas(mes);
}
function mesPosterior(){
    var mes = parseInt(document.getElementById('guardaOmes').textContent);
    mes = mes+1;
    mes = parseInt(mes);
    if(mes>12){ mes = 1}
    document.getElementById('guardaOmes').textContent = mes;
    GetAllDataRT();
    GetGanho();
    GetDespesa();
    GetBalanco();
    datas(mes);
}

import { datas } from "./datas.js";
datas();
import { GetBalanco, GetGanho, GetDespesa } from "./getsHeader.js";

var nomeMes = datas();

//---------------------------CRIAR DADOS---------------------------\\
const createClient = (client) => {


    var nome = document.getElementById('titulo').value;
    var tipo = document.getElementById('categoria').value;
    var valor = document.getElementById('valor').value;
    var periodo = document.getElementById('periodo').value;
    valor = parseFloat(valor).toFixed(2);


    var num = document.getElementById('guardaOmes').textContent;
    
    
    var data = new Date();
    var segundos = data.getSeconds();
    var minutos = data.getMinutes();
    var horas = data.getHours();
    var dias =  data.getDate();
    var meses = data.getMonth()+1;
    var anos = String(data.getFullYear());
    var id = anos+meses+dias+horas+minutos+segundos;


   if((nome=="") || (tipo=="") || (valor=="") ||(periodo=="")){
     alert('preencha todos os campos');
   }
   else
   {

    localStorage.setItem('db_client', client);
    var nomeMes = datas(num);
    if (periodo == "Mensal") {
        set(ref(db, "users/"+user_final+"/"+nomeMes+"/"+"metas/"+id),
            {
                id: id,
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo,
                mes_inicial: num

            }
            )
            .then(()=>{

              document.getElementById('titulo').value = "";
              document.getElementById('categoria').value = "";
              document.getElementById('valor').value = "";
              document.getElementById('periodo').value = "";
            
            })
            .catch((error)=>{

            })
        }
    
    else if (periodo == "Bimestral") {
    
    
        set(ref(db, "users/"+user_final+"/"+nomeMes+"/"+"metas/"+id),
            {
                id: id,
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo,
                mes_inicial: num,
                mes_final: num+1

            }
            )
            .then(()=>{

              document.getElementById('titulo').value = "";
              document.getElementById('categoria').value = "";
              document.getElementById('valor').value = "";
              document.getElementById('periodo').value = "";
            
            })
            .catch((error)=>{

            })
        
        
            num = parseFloat(num) +1;
            document.getElementById('guardaOmes').textContent = num;
            nomeMes = datas(num)
        
            set(ref(db, "users/"+user_final+"/"+nomeMes+"/"+"metas/"+id),
            {
                id: id,
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo,
                mes_inicial: num,
                mes_final: num+1

            }
            )
            .then(()=>{

              document.getElementById('titulo').value = "";
              document.getElementById('categoria').value = "";
              document.getElementById('valor').value = "";
              document.getElementById('periodo').value = "";
              num = parseFloat(num) - 1;
              document.getElementById('guardaOmes').textContent = num;
              nomeMes = datas(num)
            
            })
            .catch((error)=>{

            })
        }else if (periodo == "Trimestral") {
            set(ref(db, "users/"+user_final+"/"+nomeMes+"/"+"metas/"+id),
            {
                id: id,
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo,
                mes_inicial: num,
                mes_final: num+2

            }
            )
            .then(()=>{

              document.getElementById('titulo').value = "";
              document.getElementById('categoria').value = "";
              document.getElementById('valor').value = "";
              document.getElementById('periodo').value = "";
            
            })
            .catch((error)=>{

            })
        
            set(ref(db, "users/"+user_final+"/"+nomeMes+"/"+"metas/"+id),
            {
                id: id,
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo,
                mes_inicial: num,
                mes_final: num+2

            }
            )
            .then(()=>{

              document.getElementById('titulo').value = "";
              document.getElementById('categoria').value = "";
              document.getElementById('valor').value = "";
              document.getElementById('periodo').value = "";
            
            })
            .catch((error)=>{

            })
            nomeMes = datas(num+1);
            set(ref(db, "users/"+user_final+"/"+nomeMes+"/"+"metas/"+id),
            {
                id: id,
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo,
                mes_inicial: num,
                mes_final: num+2

            }
            )
            .then(()=>{

              document.getElementById('titulo').value = "";
              document.getElementById('categoria').value = "";
              document.getElementById('valor').value = "";
              document.getElementById('periodo').value = "";
            
            })
            .catch((error)=>{

            })
        }
    }
}




//---------------------------LER E MOSTRAR DADOS---------------------------\\
var valores = [];      
var tbody = document.getElementById('tbody');

//-------------------RECEBENDO TODO O SNAPCHOT DO DB-------------------\\

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

GetAllDataRT();
//-------------------RECEBENDO DADOS DO SNAPCHOT-------------------\\

function AddAll(users){

tbody.innerHTML="";
users.forEach(element => {
    AddItemTb(element.titulo, element.tipo, element.periodo, element.valor, element.id);

});

}

//-------------------CRIANDO LINHAS DA TABELA-------------------\\
function AddItemTb(titulo, tipo, periodo, valor, id){
    
let trow = document.createElement('tr');

let td1 = document.createElement('td');

let td2 = document.createElement('td');

let td4 = document.createElement('td');

let td5 = document.createElement('td');

let td6 = document.createElement('td');

valores.push([titulo, tipo, periodo, valor, id]);
td1.innerHTML=titulo; 
td2.innerHTML=tipo; 
td4.innerHTML=periodo;
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
//Controle.innerHTML = '<div class="butao_teste alignAcoes"><button type="button" class="butao" id = "'+id+'" onclick="pegaId(id)" ><img src="img/outline_delete_white_24dp.png"></button></div>'
//Editar.innerHTML = '<div class="butao_teste alignAcoes"><button type="button" class="butao" id = "'+id+'"  onclick="pegaIdEditar(id);" ><img src="img/outline_edit_white_24dp.png"></button></div>'

trow.appendChild(td6);
    
tbody.appendChild(trow);

document.getElementById(id).addEventListener('click',selectData);

GetGanho();
GetDespesa();
GetBalanco();

}

//---------------------------EXLUIR DADOS---------------------------\\
function deleteData(){

    var num = String(document.getElementById('teste').value).trim();
    var num1 = document.getElementById('guardaOmes').textContent;
    var nomeMes = datas(num1);
    const dbRef = ref(db);
    get(child(dbRef,"users/"+user_final+"/"+nomeMes+"/metas/"+num)).then((snapshot)=>{
        if(snapshot.exists()){

         var periodo = snapshot.val().periodo;
        if(periodo == "Mensal"){
            remove(ref(db,"users/"+user_final+"/"+nomeMes+"/metas/"+num),{
            })
            .then(()=>{
                
                closemodalDeletar();
            })
          
        }
        if(periodo == "Bimestral"){
            remove(ref(db,"users/"+user_final+"/"+nomeMes+"/metas/"+num),{
            })
            .then(()=>{
                
                closemodalDeletar();
            })
          
                num1 = parseFloat(num1) + 1;
                document.getElementById('guardaOmes').textContent = num1;
                var nomeMes1 = datas(num1);
                get(child(dbRef,"users/"+user_final+"/"+nomeMes1+"/metas/"+num)).then((snapshot)=>{

                    if(snapshot.exists()){

                        remove(ref(db,"users/"+user_final+"/"+nomeMes1+"/metas/"+num),{  
                })
                num1 = parseFloat(num1) - 1;
              document.getElementById('guardaOmes').textContent = num1;
              nomeMes1 = datas(num1)
                    } else{
                        num1 = parseFloat(num1) - 2;
                        document.getElementById('guardaOmes').textContent = num1;
                        nomeMes1 = datas(num1);
                        remove(ref(db,"users/"+user_final+"/"+nomeMes1+"/metas/"+num),{  
                })
                num1 = parseFloat(num1) + 1;
              document.getElementById('guardaOmes').textContent = num1;
              nomeMes1 = datas(num1)
                    }


                });
              
        }
            }
                });
            
}


//função do update
function alterData(){
    const dbRef = ref(db);
    var mes = document.getElementById('guardaOmes').textContent;
    var nomeMes = datas(mes);
    var nome = document.getElementById('titulo').value;
    var tipo = document.getElementById('categoria').value;
    var valor = document.getElementById('valor').value;
    valor = parseFloat(valor).toFixed(2);
    var periodo = document.getElementById('periodo').value;
    var num = String(document.getElementById('idEditar').value).trim();

    if (document.getElementById('periodo').value == "Mensal")
            {            

                update(ref(db,"users/"+user_final+"/"+nomeMes+"/metas/"+num),{
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo
            })
            .then(()=>{


                document.getElementById('titulo').value = "";
                document.getElementById('categoria').value = "";
                document.getElementById('valor').value = "";
                document.getElementById('periodo').value = "";
                document.getElementById('periodo').style.pointerEvents = "auto";
                document.querySelector('#editar').classList.add('sumiu');
                document.querySelector('#adicionar').classList.remove('sumiu');
                

              

           })
           .catch((error)=>{
                
           });
        }
    else if (document.getElementById('periodo').value == "Bimestral") {
        update(ref(db,"users/"+user_final+"/"+nomeMes+"/metas/"+num),{
                titulo: nome,
                tipo: tipo,
                valor: valor,
                periodo: periodo
    }).then(()=>{
            mes= parseFloat(mes) + 1;
            document.getElementById('guardaOmes').textContent = mes;
            nomeMes = datas(mes);
            get(child(dbRef,"users/"+user_final+"/"+nomeMes+"/metas/"+num)).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"users/"+user_final+"/"+nomeMes+"/metas/"+num),{
                            titulo: nome,
                            tipo: tipo,
                            valor: valor,
                            periodo: periodo
            });   
            mes = parseFloat(mes) - 1;
              document.getElementById('guardaOmes').textContent = mes;
              nomeMes = datas(mes);

                }
                else{
                    mes = parseFloat(mes) - 2;
                    document.getElementById('guardaOmes').textContent = mes;
                        nomeMes = datas(mes);
                        update(ref(db,"users/"+user_final+"/"+nomeMes+"/metas/"+num),{
                            titulo: nome,
                            tipo: tipo,
                            valor: valor,
                            periodo: periodo
                    });
                    mes = parseFloat(mes) + 1;
              document.getElementById('guardaOmes').textContent = mes;
              nomeMes = datas(mes);
                    
                }
            });
    });
                document.getElementById('titulo').value = "";
                document.getElementById('categoria').value = "";
                document.getElementById('valor').value = "";
                document.getElementById('periodo').style.pointerEvents = "auto";
                document.getElementById('periodo').value = "";
                document.querySelector('#editar').classList.add('sumiu');
                document.querySelector('#adicionar').classList.remove('sumiu');
                datas(mes)   
    }
}

//---------------------------LER E MOSTRAR DADOS NOS MODAIS---------------------------\\

function selectData(){
    var num = document.getElementById('guardaOmes').textContent;
    var nomeMes = datas(num);
    var num = String(document.getElementById('idEditar').value).trim();

    
        const dbref = ref(db);
        get(child(dbref,"users/"+user_final+"/"+nomeMes+"/metas/"+num)).then((snapshot)=>{
            if(snapshot.exists()){
                document.getElementById('titulo').value = snapshot.val().titulo;
                document.getElementById('categoria').value = snapshot.val().tipo;
                document.getElementById('valor').value = snapshot.val().valor;
                document.getElementById('periodo').value = snapshot.val().periodo;
                
                document.getElementById('periodo').style.pointerEvents = "none";

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