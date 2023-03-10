class Persona {
  constructor(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}\nApellido: ${this.apellido}\nCorreo electrónico: ${this.correo}`);
  }
}

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const correoInput = document.getElementById('correo');
const enviarBtn = document.getElementById('enviar');
const borrarBtn = document.getElementById('borrar');

enviarBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;
  const correo = correoInput.value;

  if (!nombre || !apellido || !regex.test(correo)) {
    alert('Por favor, complete todos los campos y proporcione un correo electrónico válido.');
    return;
  }

  const persona = new Persona(nombre, apellido, correo);
  persona.mostrarDatos();

  // Limpiar el formulario
  nombreInput.value = '';
  apellidoInput.value = '';
  correoInput.value = '';

  alert('Los datos se han guardado con éxito.');
});

borrarBtn.addEventListener('click', () => {
  // Limpiar el formulario
  nombreInput.value = '';
  apellidoInput.value = '';
  correoInput.value = '';
});
