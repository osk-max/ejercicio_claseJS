export class TodoList {

  constructor() {

    this.todos = [];

  }

  nuevoTodo( todo ){
    this.todos.push( todo )
  }

  eliminarTodo( id ){

  }

  marcarCompletado( id ){

    for( const todo of this.todos ) {

      console.log( id, todo.id ); // Solo lo realizare para hacer una comparacion

      if( todo.id == id ) { // Si el todo.id es igual al id que recibe entonces ahy que realizar el cambio
        todo.completado = !todo,completado;
        break;
      }
    }
  }

  eliminarCompletados(  ){

  }
}