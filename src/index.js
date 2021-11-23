import './styles.css'; // Incluye nuestros estilos globales
import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList();

localStorage.setItem('mi-key', 'ABC123'); // Primero va el nombre del objeto, arreglo etc seguido del valor que queremos almacenar
sessionStorage.setItem('mi-key', 'ABC123'); // Primero va el nombre del objeto, arreglo etc seguido del valor que queremos almacenar

setTimeout( () => {

  localStorage.removeItem('mi-key');

}, 1500 );



