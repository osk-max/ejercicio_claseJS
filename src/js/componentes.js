import { Todo } from '../classes';
import { todoList } from '../index';

// Referencia para HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

export const crearTodoHtml = ( todo ) => {

  const htmlTodo = `
  <li class="${ ( todo.completado ) ? 'completed' : '' }" data-id="${ ( todo.id ) }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ ( todo.completado ) ? 'checked' : '' } >
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
		</div>
	  <input class="edit" value="Create a TodoMVC template">
	</li>`;

  const div = document.createElement('DIV');
  div.innerHTML = htmlTodo;

  divTodoList.append( div.firstElementChild );
  return div.firstElementChild;
}

	// Eventos
	txtInput.addEventListener('keyup', (event) => {
		if( event.keyCode === 13 && txtInput.value.length > 0){ //Si el keycode es 13 y si los datos que ingrese son mayores a 0 va a realizar esto sino lo ignoro
			const nuevoTodo = new Todo( txtInput.value );
			todoList.nuevoTodo( nuevoTodo );
			crearTodoHtml( nuevoTodo );
			txtInput.value = '';
		}	
	});

	divTodoList.addEventListener( 'click', ( event ) => { 		
		const nombreElemento = event.target.localName; // input, label button
		const todoElemento = event.target.parentElement.parentElement;
		const todoId = todoElemento.getAttribute('data-id'); // el getAttribute es una instruccion en JS para trabajar con los atributos en html		

		if( nombreElemento.includes('input') ){ // Si da click en el ckeck me arroja un input
			todoList.marcarCompletado( todoId );

			todoElemento.classList.toggle('completed'); // Para tachar la tarea

		} else if( nombreElemento.includes( 'button' ) ){ // Si incluye el button hay que borrar el todo

			todoList.eliminarTodo( todoId );
			divTodoList.removeChild( todoElemento ); // Removerlo del html
		} 		
	});

	btnBorrar.addEventListener('click', () => {
		
		todoList.eliminarCompletados();

		for( let i = divTodoList.children.length-1; i >= 0; i-- ) { // Length - 1 porque va a iniciar desde la ultima posicion se ejecuta si i es mayor o iguala cero y con el i-- hago el procedimiento inverso

			const elemento = divTodoList.children[i];

			console.log( elemento );

			if( elemento.classList.contains( 'completed' ) ) { // Con contains puedo mirar si ese elemento tiene una clase y la clase a evaluar es completed

				divTodoList.removeChild( elemento ); // Si la tiene elimino ese elemento del divTodoList
			}
		}
	});