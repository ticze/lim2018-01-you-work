window.sendEmail = (name, dni, cell, persona_a_visitar, fecha_de_visita) => {
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
      'message': {
        "html": `<div>
                <span>Hola!!! ${persona_a_visitar} , ${name},con numero de DNI ${dni} te esta esperando en recepción,
                comunicate con nosotros para confirmar su ingreso o al numero ${cell} de la persona.</span>
                </div>`,
        "text": "contactate con nosotros: 987654321",
        "subject": "Visita Nueva",
        "from_email": "l.ticze@laboratoria.la",
        "from_name": "Comunal co-working",
        "to": [
          {
            'email': persona_a_visitar,
            'name': persona_a_visitar,
            "type": "to"
          }
        ],
        "headers": {
          "Reply-To": "l.ticze@laboratoria.la"
        }

      },
      "async": false,
      "ip_pool": "Main Pool",
      "send_at": fecha_de_visita
    }
  });
};