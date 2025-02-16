/* eslint-disable react/prop-types */


import { useState } from 'react';

import Divider from './Divider';
import Todo from './Todo';
import TodoForm from './TodoForm';
import ControlPanel from './ControlPanel';

import useLocalStorage from '../hooks/useLocalStorage';

function TodoList() {
//   const [todos2, setTodos2] = useState([
//     {id: 1, content: 'Feed Vitiaz', icon: GiAxolotl, tags: 'home', done: true},
//     {id: 2, content: 'Go for a walk', icon: GiBoots, tags: 'health', done: false},
//     {id: 3, content: 'Eat a fruit', icon: GiFruitBowl, tags: '',done: false},
//     {id: 4, content: 'Study for the midterm test', icon: FaShieldAlt, tags: 'uni',done: false},
//     {id: 5, content: 'Do online midterm', icon: LuSword, tags: 'uni',done: false},
//     {id: 6, content: 'Feed Vitiaz again', icon: GiAxolotl,tags: 'home', done: false},
//     {id: 7, content: 'Pizza! Now!', icon: GiFullPizza ,tags: 'health', done: false},
//   ]);
    const sampleTodos = [
            {id: 1, content: 'Feed Vitiaz', icon: "GiAxolotl", tags: 'home', done: true},
            {id: 2, content: 'Study for the midterm test', icon: "FaShieldAlt", tags: 'uni',done: false},
            {id: 3, content: 'Go for a walk', icon: "GiBoots", tags: 'health', done: false},
            {id: 4, content: 'Eat a fruit', icon: "GiFruitBowl", tags: '',done: false},
            {id: 5, content: 'Do online midterm', icon: "LuSword", tags: 'uni',done: false},
            {id: 6, content: 'Feed Vitiaz again', icon: "GiAxolotl",tags: 'home', done: false},
            {id: 7, content: 'Pizza! Now!', icon: "GiFullPizza" ,tags: 'health', done: false},
          ]
    // const [localTodos, setLocalTodos] = useLocalStorage('todos', sampleTodos);
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
        id: todos.length+1, 
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

  const [search, setSearch] = useState('');

  const filterTodos = (todos, search) => {
    return todos.filter( todo => {
        return (
            todo.content.toLowerCase().includes(search.toLowerCase()) ||
            todo.tags.toLowerCase().includes(search.toLowerCase())

        );
    })
  }
//   const sortTodos = (todos, mode = 'A') => { //N - no sort, A - ascending, D - descending
//     if(isAscending){
//         return todos.sort((a,b) => {a.tags.}).reverse();
//     }
//     return todos.sort()
//   }

  const clearTodos = () => {
    setTodos([]);
  }
  const restartDemo = () => {
    setTodos(sampleTodos);
  }



  return (
    <div className='container m-auto w-14/15 lg:w-2/3 mt-4 mb-8'>
        
        <ControlPanel search={search} setSearch={setSearch} clearTodos={clearTodos} restartDemo={restartDemo}/>
         {filterTodos(todos, search).map(todo => {
            return <Todo key={todo.id} todo={todo} toggleDone ={toggleDone} updateTodo={updateTodo}/>
         })}
        
        <Divider /> 

        <TodoForm submitAction = {addTodo}/>

    </div>
  )
}

export default TodoList