const dias = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miércoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sábado',
}; 

const fechaCompleta = new Date();
const diaSemana = fechaCompleta.getDay();

const select = document.getElementById('localizacion');

select.addEventListener('change', event => {
  const local = event.target.value;
  document.getElementById('fecha').innerHTML = fechaCompleta.toLocaleDateString(local);
});

document.getElementById('dia').innerHTML = dias[diaSemana];
const localActual = document.getElementById('localizacion').value;
document.getElementById('fecha').innerHTML = fechaCompleta.toLocaleDateString(localActual);
