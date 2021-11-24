export class TodoList {

  constructor() {

    this.cargarLocalStorage();
  }

  nuevoTodo( todo ) {
    this.todos.push( todo );
    this.guardarLocalStorage();
  }

  eliminarTodo( id ) {
    this.todos = this.todos.filter( todo => todo.id != id ) // Esta instruccion va a regresar un arreglo excluyendo el todo.id que consida con el id que yo tenga este nuevo arreglo lo almaceno en this.todos 
    this.guardarLocalStorage();
  }

  marcarCompletado( id ) {
    for( const todo of this.todos ) {

      if( todo.id == id ) { // Si el todo.id es igual al id que recibe entonces ahy que realizar el cambio
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliminarCompletados(  ) {
    this.todos = this.todos.filter( todo => !todo.completado ) // Esta instruccion va a regresar un arreglo con todos los elementos que no esten completados 
    this.guardarLocalStorage();
  }

  guardarLocalStorage( ) {

    localStorage.setItem( 'todo', JSON.stringify( this.todos ) ); // Con el JSON.stringify le estoy diciendo que convierta este arreglo de todos a un json perfecto
  }

  cargarLocalStorage( ) {

    this.todos = ( localStorage.getItem( 'todo' ) ) // Si en el localStorage existe el todo ejecute el sig codigo 
                  ? JSON.parse( localStorage.getItem( 'todo' ) ) // Con el JSON.parse lo estoy convirtiendo de string a su objeto original 
                  : [] }; // Si no existe lo inicializo como un arreglo vacio
}


