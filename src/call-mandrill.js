window.sendEmail = (visitanteDatos) => {
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'ZGiSDAUGJIgaCMIqm9ysPA',
            'message': {
                "html": `<div>
                <span>Hola!!! ${visitanteDatos.persona_a_visitar} , ${visitanteDatos.name},con numero de DNI ${visitanteDatos.dni} te esta esperando en recepción,
                comunicate con nosotros para confirmar su ingreso o al numero ${visitanteDatos.cell} de la persona.</span>
                </div>`,
                "text": "contactate con nosotros: 987654321",
                "subject": "Visita Nueva",
                "from_email": "l.tiicze@laboratoria.la",
                "from_name": "Comunal coworking",
                "to": [
                    {
                        'email': visitanteDatos.persona_a_visitar,
                        'name': visitanteDatos.persona_a_visitar,
                        "type": "to"
                    }
                ],
                "headers": {
                    "Reply-To": "l.ticze@laboratoria.la"
                }

            },
            "async": false,
            "ip_pool": "Main Pool",
            "send_at": visitanteDatos.fecha_de_visita
        }
    });
};