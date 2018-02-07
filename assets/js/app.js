  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  $(document).ready(function() {
    $('select').material_select();
  });
            

// Initialize Firebase

(function (){ //iife una expresion de funcion invocada inmediatamente (function)
  const config = {
    apiKey: "AIzaSyA7aYT6Sp-a_eONFTt6MjXRUuGgww8W5Is",
    authDomain: "instacollage-73708.firebaseapp.com",
    databaseURL: "https://instacollage-73708.firebaseio.com",
    projectId: "instacollage-73708",
    storageBucket: "instacollage-73708.appspot.com",
    messagingSenderId: "598667732628"
  };
  firebase.initializeApp(config);
// const: variable no va a cambiar , puedo agregar cosas // let: variable que si se puede cambiar

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const txtEmail2 = document.getElementById('txtEmail2');
const txtPassword2 = document.getElementById('txtPassword2');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnSalir = document.getElementById('btnSalir');
const hacerUnEnvio = document.getElementById('hacerUnEnvio');
const btnVolver = document.getElementById('btnVolver');

//agregando evento al btnLogin
btnLogin.addEventListener('click', e => {
  //pasos para obtener correo y contraseña
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //para ingresar 
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch( e => console.log(e.menssage));
});

btnVolver.addEventListener('click', e => {
  $('#sectionCollage').hide();
  $('#sectionPrincipal').show();
});

//pasos para poder afiliarte con correo y contraseña
btnSignUp.addEventListener('click', e => {   
  const email = txtEmail2.value;
  const pass = txtPassword2.value;
  const auth = firebase.auth();
  //para ingresar 
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise//utilizamos promise para que nos termine haga una accion .then
    .catch( e => alert(e.message)); //e variable se puuede llamar como quiera
});

//funcion para activar el boton de salir

btnSalir.addEventListener('click', e => {
  firebase.auth().signOut();
})


firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    $('#sectionPrincipal').hide();
    $('#sectionCollage').show();
    if ($('#registrar').modal) $('#registrar').modal('close'); 
  } else {
    $('#sectionPrincipal').show();
    $('#sectionCollage').hide();
    $('#registrar').modal('open'); 
  }
}); 

}());


//Funciones para arrastrar las fotos

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

function leaveDrop(ev){
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}