const crear = document.getElementById('crear');
const ingresar = document.getElementById('ingresar');
crear.addEventListener('click', () => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;
  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });

})
ingresar.addEventListener('click', () => {
  event.preventDefault();
  const email2 = document.getElementById('email2').value;
  const contrasena2 = document.getElementById('contrasena2').value;
  firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
})
const observador = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      dtVisitante();
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      alert('No existe usuario')
    }
  });
}
observador()

const dtVisitante = () => {
  console.log('ingreso')
  const contenido = document.getElementById('contenido');
  let ref = firebase.database().ref('/visitante');
  ref.once('value', (data) => {
    data.forEach(visitante => {
      let visitor = visitante.key,
        visitanteDatos = visitante.val();
      contenido.innerHTML = `
          <tr data-key="${visitor}">
            <td>${visitanteDatos.name}</td>
            <td>${visitanteDatos.dni}</td>
            <td>${visitanteDatos.cell}</td>
            <td>${visitanteDatos.persona_a_visitar}</td>
            <td>${visitanteDatos.fecha_de_visita}</td>
          </tr>
        `
    })
  });
}