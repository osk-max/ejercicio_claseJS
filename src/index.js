import './styles.css'; // Incluye nuestros estilos globales
import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml ); // Para que permanezca en mi html y no se elimine cuando actualizo

todoList.todos[0].imprimiClase(); // LLamo la posicion  del arr 0 con el metodo que cree de EJ

console.log( 'todos', todoList.todos );

