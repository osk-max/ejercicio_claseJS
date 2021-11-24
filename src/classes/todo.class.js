export class Todo {

  constructor ( tarea ) { // Se recibe la tarea que se va a a enlistar

    this.tarea = tarea;
    this.id = new Date().getTime(); // 8956471
    this.completado = false;
    this.creado = new Date();
  }

  imprimirClase() { // Metodo EJ
    console.log(`${ this.tarea } - ${ this.id }`);
  }

}


