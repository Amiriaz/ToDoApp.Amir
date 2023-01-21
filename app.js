  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase,ref,set,push,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBi3VK63m0DdFC1VhgtrdJzRmGflrlOej4",
    authDomain: "javascript10-f88b3.firebaseapp.com",
    databaseURL: "https://javascript10-f88b3-default-rtdb.firebaseio.com",
    projectId: "javascript10-f88b3",
    storageBucket: "javascript10-f88b3.appspot.com",
    messagingSenderId: "744739698761",
    appId: "1:744739698761:web:9ab7c3e6e2443819dc2798",
    measurementId: "G-M26NSY6NDZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase();

window.addTodo = function (){   
let todo = document.getElementById("todo")  
let list = document.getElementById("list");
list.innerHTML +=`
<li>
<div class="list-card">

<input id="${todo.key}" type="text" value="${todo.value}" disabled/>
<button id="${todo.key}edit" onclick="editTodo('${todo.key}')" type="button" class="btn btn-success">Edit</button>
<button class="box1" id="${todo.key}" onclick="delTodo('${todo.key}')">Delete</button></li>
</div>`
let addTodo = {
      todo: todo.value,
    
  }
  addTodo.id = push(ref(db, 'todo/')).key  
     let reference = ref(db, `todo/${addTodo.id}`)
      set(reference,addTodo)
       console.log(addTodo) 
}
window.deleteAll = function () {
  list = ref('todo').remove()  
  let list = document.getElementById('list')
  list.innerHTML = "";
}
window.delTodo = function (key) {
 let list = ref(`todo/${key}`).remove()
  event.target.parentNode.parentNode.parentNode.remove()
  console.log(list)
}
window.editTodo = function (id) {
   let input = document.getElementById(id)
   input.disabled = false
   console.log(input)
  } 