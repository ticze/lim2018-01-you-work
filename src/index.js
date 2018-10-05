const btnRegister = document.getElementById('btn-for');

btnRegister.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('nombres').value;
  const dni = document.getElementById('dni').value;
  const cellPhone = document.getElementById('celular').value;
  const slcVisitante = document.getElementById('slc_vst').value;
  const visitDate = new Date().toLocaleString();

  const admVisitantes = firebase.database().ref().child('visitante');
  admVisitantes.push({
    name: name,
    dni: dni,
    cell: cellPhone,
    persona_a_visitar: slcVisitante,
    fecha_de_visita: visitDate,
  })

  const sendEmail = () => {
    let ref = firebase.database().ref('/visitante');
    ref.once('value', (data) => {
      data.forEach(visitante => {
        let visitor = visitante.key,
          visitanteDatos = visitante.val();
        // console.log(visitanteDatos)
        return visitanteDatos;
      })
    });
  }
})

window.envio = (datos)=>{
  const data = {
    "personalizations": [
      {
        "to": [
          {
            "email": datos.persona_a_visitar ,
          }
        ],
        "subject": "Hola, =)"
      }
    ],
    "from": {
      "email": "luis@laboratoria.la"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "Ves que si funciona!"
      }
    ]
  }
  
  fetch('https://api.sendgrid.com/v3/mail/send', {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer [TU-SENDGRID-API-KEY]"
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(response => response.json())
}