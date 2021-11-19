import { Todo } from '../classes';
import { todoList } from '../index';

// Referencia para HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

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






