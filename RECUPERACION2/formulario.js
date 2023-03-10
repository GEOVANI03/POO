class Persona {
    constructor(nombre, apellido, email) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
    }
  
    mostrarDatos() {
      console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Email: ${this.email}`);
    }
  }
  
  class Validacion {
    static validarNombre(nombre) {
      if (!nombre) {
        throw new Error('El nombre es obligatorio');
      }
    }
  
    static validarApellido(apellido) {
      if (!apellido) {
        throw new Error('El apellido es obligatorio');
      }
    }
  
    static validarEmail(email) {
      if (!email) {
        throw new Error('El email es obligatorio');
      }
  
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!regex.test(email)) {
        throw new Error('El email no es válido');
      }
    }
  }
  
  class Formulario {
    constructor() {
      this.nombreInput = document.getElementById('nombre');
      this.apellidoInput = document.getElementById('apellido');
      this.emailInput = document.getElementById('email');
      this.enviarButton = document.getElementById('enviar');
  
      this.enviarButton.addEventListener('click', this.enviarFormulario.bind(this));
    }
  
    enviarFormulario() {
      try {
        const nombre = this.nombreInput.value;
        const apellido = this.apellidoInput.value;
        const email = this.emailInput.value;
  
        Validacion.validarNombre(nombre);
        Validacion.validarApellido(apellido);
        Validacion.validarEmail(email);
  
        const persona = new Persona(nombre, apellido, email);
        persona.mostrarDatos();
  
        this.nombreInput.value = '';
        this.apellidoInput.value = '';
        this.emailInput.value = '';
      } catch (error) {
        alert(error.message);
      }
    }
  }
  
  const formulario = new Formulario();
  