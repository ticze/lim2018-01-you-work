// const btnRegister = document.getElementById('btn-for');

// btnRegister.addEventListener('click', () => {
//   event.preventDefault();
//   const name = document.getElementById('nombres').value;
//   const dni = document.getElementById('dni').value;
//   const cellPhone = document.getElementById('celular').value;
//   const slcVisitante = document.getElementById('slc_vst').value;
//   const visitDate = new Date().toLocaleString();

//   const admVisitantes = firebase.database().ref().child('visitante');
//   admVisitantes.push({
//     name: name,
//     dni: dni,
//     cell: cellPhone,
//     persona_a_visitar: slcVisitante,
//     fecha_de_visita: visitDate,
//   })
// })

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

var start = document.querySelector('#start'),
  capture = document.querySelector('#capture'),
  canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d'),
  video = document.querySelector('video');

start.addEventListener('click', function () {

  navigator.getUserMedia({
    video: true
  }, function (stream) {
    var src = window.URL.createObjectURL(stream);
    video.src = src;
  }, function (e) {
    console.log(e);
  });

  capture.addEventListener('click', function () {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  }, false);

}, false);