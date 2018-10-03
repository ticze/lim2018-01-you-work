const btnRegister = document.getElementById('btn-for');

btnRegister.addEventListener('click', () => {
  event.preventDefault();
  const name = document.getElementById('nombres').value;
  const dni = document.getElementById('dni').value;
  const cellPhone = document.getElementById('celular').value;
  const slcVisitante = document.getElementById('slc_vst').value;
  const visitDate = new Date().toLocaleString();
  console.log(name, dni, cellPhone,slcVisitante, visitDate)
  
  const admVisitantes = firebase.database().ref().child('visitante');
  admVisitantes.push({
    name: name,
    dni: dni,
    cell: cellPhone,
    persona_a_visitar: slcVisitante,
    fecha_de_visita: visitDate,
  })
})