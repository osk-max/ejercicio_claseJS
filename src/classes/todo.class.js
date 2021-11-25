export class Todo {

  static fromJson( { id, tarea, completado, creado } ){ // Recibe la informacion del localStorage y realiza la destructuracion 
    
    const tempTodo = new Todo( tarea ); // tempTodo va a ser una nueva instancia del Todo

    tempTodo.id         = id;
    tempTodo.completado = completado;
    tempTodo.creado     = creado;

    return tempTodo; // Regreso la instancia
  }

  constructor ( tarea ) { // Se recibe la tarea que se va a a enlistar

    this.tarea = tarea;
    this.id = new Date().getTime(); // 8956471
    this.completado = false;
    this.creado = new Date();
  }  
}