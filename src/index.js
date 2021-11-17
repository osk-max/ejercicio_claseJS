import './styles.css'; // Incluye nuestros estilos globales
import { Todo, TodoList} from './classes';

const todoList = new TodoList();

const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo(tarea);
console.log(todoList); 



