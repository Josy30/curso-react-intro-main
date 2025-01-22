import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'tomar el curso de Intro a React.js', completed: false},
  { text: 'llorar con la llorona', completed: false },
  { text: 'lalallala', completed: false}, 


]

function App() {
  return (
    <>
      <TodoTitle completed = {16} total = {25} />
      <TodoSearch/>

    <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem 
        key = {todo.text} 
        text={todo.text}
        completed={todo.completed}
        />
      ))}
    </TodoList>  

    <CreateTodoButton/>
    </>
  );
}






export default App;
