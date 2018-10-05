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
})

window.sendEmail = () => {
  let ref = firebase.database().ref('/visitante');
  ref.once('value', (data) => {
    data.forEach(visitante => {
      let visitor = visitante.key,
        visitanteDatos = visitante.val();
      const data = {
        key: 'ZGiSDAUGJIgaCMIqm9ysPA',
        message: {
          html: `<div>
                  <span>Hola!!! ${visitanteDatos.persona_a_visitar} , ${visitanteDatos.name},connumero de DNI ${visitanteDatos.dni} te esta esperando en recepción,
                  comunicate con nosotros para confirmar su ingreso o al ${visitanteDatos.cell} de la persona.</span></div>`,
          'text': 'contactate con nosotros: 987654321',
          'subject': 'Visita Nueva',
          'from_email': 'l.ticze@laboratoria.la',
          'from_name': 'Comunal coworking',
          'to': [
            {
              'email': visitanteDatos.persona_a_visitar,
              'name': visitanteDatos.persona_a_visitar,
              'type': 'to'
            }
          ],
          'headers': {
            'Reply-To': 'l.ticze@laboratoria.la'
          }
        }
      };
      return JSON.stringify(data);
    })
  })
};

window.emailMandrill = (data) => {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data
  });
};