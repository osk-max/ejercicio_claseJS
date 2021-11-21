export class TodoList {

  constructor() {

    this.todos = [];

  }

  nuevoTodo( todo ){
    this.todos.push( todo )
  }

  eliminarTodo( id ){

    this.todos = this.todos.filter( todo => todo.id != id ) // Esta instruccion va a regresar un arreglo excluyendo el todo.id que consida con el id que yo tenga este nuevo arreglo lo almaceno en this.todos 
  }

  marcarCompletado( id ){

    for( const todo of this.todos ) {

      if( todo.id == id ) { // Si el todo.id es igual al id que recibe entonces ahy que realizar el cambio
        todo.completado = !todo.completado;
        break;
      }
    }
  }

  eliminarCompletados(  ){

    this.todos = this.todos.filter( todo => !todo.completado ) // Esta instruccion va a regresar un arreglo con todos los elementos que no esten completados 
  }
}