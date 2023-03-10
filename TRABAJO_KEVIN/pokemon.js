// Definición de la clase Pokemon
class Pokemon {
    constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
    }
  }
  
  // Definición de la clase Dueño
  class Dueño {
    constructor(nombre, pokemones) {
      this.nombre = nombre;
      this.pokemones = pokemones;
    }
  }
  
  // Definición de la clase Pokebola
  class Pokebola {
    constructor(nombre, pokemon) {
      this.nombre = nombre;
      this.pokemon = pokemon;
    }
  }
  
  // Lista para almacenar los objetos creados
  let listaPokemon = [];
  
  // Función para guardar los datos del formulario
  function guardarPokemon(event) {
    event.preventDefault();
  
    // Tomar los valores ingresados en el formulario
    const nombrePokemon = document.getElementById("nombre_pokemon").value;
    const tipoPokemon = document.getElementById("tipo_pokemon").value;
    const nombreDueño = document.getElementById("nombre_dueño").value;
    const nombrePokebola = document.getElementById("nombre_pokebola").value;
  
    // Crear un objeto Pokemon con los valores ingresados
    const pokemon = new Pokemon(nombrePokemon, tipoPokemon);
  
    // Buscar si ya existe un dueño con el mismo nombre
    let dueñoExistente = listaPokemon.find(p => p.nombre === nombreDueño);
  
    if (dueñoExistente) {
      // Si el dueño ya existe, agregar el nuevo Pokémon al array de pokemones del dueño
      dueñoExistente.pokemones.push(pokemon);
    } else {
      // Si el dueño no existe, crear un nuevo objeto Dueño con un array de pokemones que contenga el nuevo Pokémon
      const dueño = new Dueño(nombreDueño, [pokemon]);
      listaPokemon.push(dueño);
    }
  
    // Crear un objeto Pokebola con los valores ingresados y el objeto Pokemon creado
    const pokebola = new Pokebola(nombrePokebola, pokemon);
  
    // Agregar los objetos creados a la lista
    listaPokemon.push(pokebola);
  
    // Mostrar la lista en la consola para verificar que los objetos fueron creados y agregados a la lista
    console.log(listaPokemon);
  }