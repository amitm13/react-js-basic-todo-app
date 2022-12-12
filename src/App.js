import { useEffect, useState } from 'react';
import './App.css';
import HeaderTitle from './Components/HeaderTitle';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {

  const [todoList, setTodoList] = useState([
    
  ]);

  const addTodo = (todoTitle) => {
    if(todoTitle==""){
      alert('Please enter todo title!');
      return false;
    }
    setTodoList([ ...todoList, { "title":todoTitle, "status":0 }]);
  }

  const removeTodo = (todoTitle) => {
    let newTodo = todoList.filter(todo => todo.title!=todoTitle);
    setTodoList(newTodo);
  }

  const updateStatus = (event, todoTitle) => {
    console.log('event', event)
    let tempArray = [];
    todoList.forEach(element => {
      if(todoTitle == element.title){
        tempArray.push({title:todoTitle, status: (event.target.checked) ? 1 : 0});
      }else{
        tempArray.push(element);
      }
    });
    setTodoList(tempArray);
  }
  return (
    <div className="container bg-gray-100 mx-auto px-4">
      <HeaderTitle />
      <TodoForm addTodo={addTodo} />
      {todoList.map((todo, key) => <TodoItem removeTodo={removeTodo} updateStatus={updateStatus} key={key} todo={todo}/>)}
    </div>
  );
}

export default App;
