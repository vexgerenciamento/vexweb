    
        
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

    function inputs(){
        var nome = document.getElementById("nome");
        var tipo = document.getElementById("tipo");
        var valor = document.getElementById("valor");
        var periodo = document.getElementById("periodo");
    }


var nomeMes = datas();
//---------------------------CRIAR DADOS---------------------------\\
const createClient = (client) => {
    
    var nomeMes = datas();
    inputs();
    var data = new Date();
    var segundos = data.getSeconds();
    var minutos = data.getMinutes();
    var horas = data.getHours();
    var dias =  data.getDate();
    var meses = data.getMonth()+1;
    var anos = String(data.getFullYear());

    var id = anos+meses+dias+'_'+horas+minutos+segundos;
    console.log(id);
    localStorage.setItem('db_client', client);
        set(ref(db, "users/"+user_final+"/"+nomeMes+"/gastos/"+id),
            {
                id: id,
                titutlo: document.getElementById("nome").value,
                tipo: tipo.value,
                valor: valor.value,
                periodo: periodo.value
            }
            )
            .then(()=>{

                document.getElementById('nome').value = null;
                document.getElementById('tipo').value = null;
                document.getElementById('periodo').value = null;
                document.getElementById('valor').value = null;
            
            })
            .catch((error)=>{

            })}

    
    document.getElementById("salvar").addEventListener('click', createClient);

   
//---------------------------LER E MOSTRAR DADOS---------------------------\\
var valores = [];      
var tbody = document.getElementById('tbody');


//-------------------RECEBENDO TODO O SNAPCHOT DO DB-------------------\\

function GetAllDataRT(){

const dbRef = ref(db,"users/"+user_final+"/"+nomeMes+"/gastos/");

    onValue(dbRef,(snapshot)=>{
    var gastos = [];
    snapshot.forEach(childSnapshot =>{
    gastos.push(childSnapshot.val());
    });
    AddAll(gastos);
    });
            }
    window.onload = GetAllDataRT;

//-------------------RECEBENDO DADOS DO SNAPCHOT-------------------\\

function AddAll(users){

    tbody.innerHTML="";
    users.forEach(element => {
        AddItemTb(element.id, element.titutlo,element.periodo, element.valor,element.tipo);
    });
}

//-------------------CRIANDO LINHAS DA TABELA-------------------\\
function AddItemTb(id, titutlo, periodo, valor, tipo){

    let trow = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');

    valores.push([id, titutlo, periodo, valor, tipo]);

    td1.innerHTML=id
    td2.innerHTML=titutlo;
    td4.innerHTML=periodo;
    td5.innerHTML=valor;
    td6.innerHTML=tipo;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);  
    var Controle = document.createElement("div");
    var Editar = document.createElement("div");

    Controle.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" id = "'+id+'"data-target="#exampleModalCenter" onclick="pegaId(id)" >Excluir</button>'
    Editar.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" id = "'+id+'"data-target="#exampleModalCenter" onclick="pegaIdEditar(id)" >Editar</button>'

    trow.appendChild(Controle);
    trow.appendChild(Editar);
        
    tbody.appendChild(trow);                    

}


//---------------------------LER E MOSTRAR DADOS NOS MODAIS---------------------------\\

function selectData(){
    
var id = document.getElementById('idEditar').value;

    const dbref = ref(db);
    get(child(dbref,"users/"+user_final+"/"+nomeMes+"/gastos/"+id)).then((snapshot)=>{
        if(snapshot.exists()){
            document.getElementById('nomeEditar').value = snapshot.val().titutlo;
            document.getElementById('tipoEditar').value = snapshot.val().tipo;
            document.getElementById('valorEditar').value = snapshot.val().valor;
            document.getElementById('periodoEditar').value = snapshot.val().periodo;
        }else{
          
        }
    })
    .catch((error)=>{
      
    });
}

//document.getElementById('editar').addEventListener('click', selectData);


//---------------------------EXLUIR DADOS---------------------------\\
function deleteData(){
    var num = String(document.getElementById('teste').value).trim();
    
    console.log(num);
    remove(ref(db,"users/"+user_final+"/"+nomeMes+"/gastos/"+num),{
    })
    .then(()=>{

        closemodalDeletar();

    })
    .catch((error)=>{

    });
}

document.getElementById('excluir').addEventListener('click', deleteData);

export {createClient, deleteData ,AddAll, AddItemTb, GetAllDataRT, selectData, inputs}
