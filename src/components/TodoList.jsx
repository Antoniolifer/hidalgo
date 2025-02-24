/* eslint-disable react/prop-types */


import { useState } from 'react';

import Divider from './Divider';
import Todo from './Todo';
import TodoForm from './TodoForm';
import ControlPanel from './ControlPanel';

import useLocalStorage from '../hooks/useLocalStorage';

import {v4 as uuidv4} from 'uuid';

function TodoList() {

    const sampleTodos = [
            {id: 1, content: 'Feed Vitiaz', icon: "GiAxolotl", tags: 'home', done: true},
            {id: 2, content: 'Study for the midterm test', icon: "FaShieldAlt", tags: 'uni',done: false},
            {id: 3, content: 'Go for a walk', icon: "GiBoots", tags: 'health', done: false},
            {id: 4, content: 'Eat a fruit', icon: "GiFruitBowl", tags: '',done: false},
            {id: 5, content: 'Do the midterm test', icon: "LuSword", tags: 'uni',done: false},
            // {id: 6, content: 'Feed Vitiaz, again', icon: "GiAxolotl",tags: 'home', done: false},
            {id: 7, content: 'Pizza! Now!', icon: "GiFullPizza" ,tags: 'health', done: false},
          ]
    const [todos, setTodos] = useLocalStorage('todos', sampleTodos);

  const toggleDone = (id) => {
    setTodos(todos.map(todo => {
        if (todo.id === id){
            return {...todo, done: !todo.done}
        }
        return todo; 
    }));
  }
  const addTodo = ((newTodoData) => {
    const todo = {
        id: uuidv4(), 
        content: newTodoData.content, 
        tags: newTodoData.tags,
        icon: newTodoData.icon, 
        done: false};
    setTodos((prev) => [...prev, todo]);
  })

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => {
        if (todo.id === updatedTodo.id){
            return updatedTodo
        }
        return todo; 
    }));
  }
  const deleteTodo = (id) => {
    
    setTodos(todos.filter(todo => {
        return todo.id !== id
    }));
  }

  const [search, setSearch] = useState('');

  const filterTodos = (todos, search) => {
    return todos.filter( todo => {
        return (
            todo.content.toLowerCase().includes(search.toLowerCase()) ||
            todo.tags.toLowerCase().includes(search.toLowerCase())

        );
    })
  }

  const [isSorting, setIsSorting] = useState(false);
  
  const sortTodos = (todos) => { 
    return [...todos].sort((a,b) => {
      if(!a.tags && !b.tags){
        return 1;
      } else if(!b.tags){
        return -1;
      } else if(!a.tags) {
        return 0;
      }
      return a.tags.toLowerCase().localeCompare(b.tags.toLowerCase());
    });
  };

  const clearTodos = () => {
    setTodos([]);
  }
  const restartDemo = () => {
    setTodos(sampleTodos);
    setIsSorting(false);
  }


  console.log('sorting? :', isSorting);
  console.log('todos? :', todos);
  return (
    <div className='container m-auto w-14/15 lg:w-3/4 mt-4 mb-8 '>
        
        <ControlPanel 
            search={search} 
            setSearch={setSearch} 
            clearTodos={clearTodos} 
            restartDemo={restartDemo}
            isSorting={isSorting}
            setIsSorting={setIsSorting}
            />
        
         {filterTodos((isSorting ? sortTodos(todos) : todos), search).map(todo => {
            return <Todo key={todo.id} todo={todo} toggleDone ={toggleDone} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
         })}
        <p className='text-center font-makh text-gray-400 text-lg'>double-click a todo to mark it as complete.</p>
        <Divider /> 

        <TodoForm submitAction = {addTodo}/>

    </div>
  )
}

export default TodoList