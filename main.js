'use strict'

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import{getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

var nome = document.getElementById('nome');

const db = getDatabase();

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// CRUD - create read update delete
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)

    
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveClient = () => {
    debugger
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            tipo: document.getElementById('tipo').value,
            valor: document.getElementById('valor').value,
            periodo: document.getElementById('periodo').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            createClient(client)
            updateTable()
            closeModal()
        } else {
            updateClient(index, client)
            updateTable()
            closeModal()
        }
    }
    set(ref(db, "teste/"+nome.value),
    {
            nome: document.getElementById('nome').value,
            tipo: document.getElementById('tipo').value,
            valor: document.getElementById('valor').value,
            periodo: document.getElementById('periodo').value
    }
    )
    .then(()=>{
        alert('Cadastro realizado com sucesso!');
    })
    .catch((error)=>{
        alert("NÃO FOI");
    })
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td class="nome">${client.nome}</td>
        <td class="tipo">${client.tipo}</td>
        <td  class="valor">R$${client.valor},00</td>
        <td class="periodo">${client.periodo}</td>
        <td id="teste" class="op">
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
 
const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('tipo').value = client.tipo
    document.getElementById('valor').value = client.valor
    document.getElementById('periodo').value = client.periodo
    document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
    const client = readClient()[index]
    client.index = index
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const client = readClient()[index]
            const response = confirm(`Deseja realmente excluir o valor ${client.nome}`)
            if (response) {
                deleteClient(index)
                updateTable()
            }
        }
    }
}}

updateTable();

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete);

document.getElementById('cancelar')
    .addEventListener('click', closeModal);

