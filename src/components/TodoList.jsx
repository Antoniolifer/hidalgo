/* eslint-disable react/prop-types */
import { LuSword } from 'react-icons/lu';
// import { GiCheckedShield } from "react-icons/gi";
import { GiFruitBowl,GiAxolotl,GiBoots, GiScrollUnfurled} from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

import Divider from './Divider';

function TodoList() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'Feed Vitiaz', icon: GiAxolotl, tags: 'home', done: true},
    {id: 2, content: 'Go for a walk', icon: GiBoots, tags: 'health', done: false},
    {id: 3, content: 'Eat a fruit', icon: GiFruitBowl, tags: '',done: false},
    {id: 4, content: 'Study for the midterm test', icon: FaShieldAlt, tags: 'uni',done: false},
    {id: 5, content: 'Do online midterm', icon: LuSword, tags: 'uni',done: false},
    {id: 6, content: 'Feed Vitiaz again', icon: GiAxolotl,tags: 'home', done: false},
  ]);

  const toggleDone = (id) => {
    setTodos(todos.map(todo => {
        if (todo.id === id){
            return {...todo, done: !todo.done}
        }
        return todo; 
    }));
  }
  const addTodo = ((newTodoData, icon = GiScrollUnfurled) => {
    console.log(newTodoData);
    const todo = {
        id: todos.length+1, 
        content: newTodoData.content, 
        tags: newTodoData.tags,
        icon, 
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
    console.log(todos);
    return todos.filter( todo => {
        return todo.content.toLowerCase().includes(search.toLowerCase());
    })
  }

  return (
    <div className='container m-auto w-14/15 lg:w-2/3 mt-4 mb-8'>
        <SearchInput setSearch ={setSearch}/>

         {filterTodos(todos, search).map(todo => {
            return <Todo key={todo.id} todo={todo} toggleDone ={toggleDone} updateTodo={updateTodo}/>
         })}
        
        <Divider /> 

        <TodoForm submitAction = {addTodo}/>

    </div>
  )
}
function SearchInput({search, setSearch}){

    return(
        <div className='text-center md:text-end my-1'>
            <input 
            className='w-4/5 p-2 bg-white text-2xl rounded-xl text-center font-makh md:w-1/4'
            value={search} 
            onChange={(e)=> {
                setSearch(e.target.value)
            }} placeholder='Search... &#128270;'></input>
        </div>
    )
}
function TodoForm({submitAction, todo = {}}) {
    const [text, setText] = useState(todo?.content || ''); 
    const [tags, setTags] = useState(todo?.tags || ''); 

    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        if(text !== ''){
            submitAction({content:text, tags});
            setText('');
            setTags('');
        }   
    }
    useEffect(()=> {
        inputRef.current.focus();
    },[])
    return(
            <form className='text-center h-32 flex-wrap md:flex-nowrap md:h-16 p-1 w-full m-auto flex shadow-lg mt-3 shadow-cyan-500/50 rounded-lg border-white border-2' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="What's next?"
                    value={text}
                    ref={inputRef}
                    onChange={(e) => setText(e.target.value)}
                    className='bg-white w-8/10 rounded-sm mb-1 md:mb-0 text-xl md:text-2xl p-2 font-makh grow'/>
                <input 
                    type="text" 
                    placeholder="Tags/categories"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className='bg-white w-4/10 rounded-sm text-xl md:text-2xl md:ml-1 p-2 font-makh grow focus:shadow-cyan-500'/>
                <button type='submit' className='inline bg-white px-5 text-xl md:text-2xl rounded-xl ml-1 font-makh border-2 border-gray-300 cursor-pointer
                        hover:text-white hover:bg-black
                        transition-all duration-300 ease-in-out'>{todo?.content ? 'update' : 'add'}</button>
        </form>
        
    )
}
function Todo( {todo, toggleDone, updateTodo}){
    const [isEditing, setIsEditing] = useState(false);

    

    const handleDoubleClick = () => {
        toggleDone(todo.id);
    }
    const handleEdit = () => {
        setIsEditing(true);

    }
    const handleSubmit = (updatedTodo) => {
        console.log(updatedTodo);
        updateTodo({...todo, content:updatedTodo.content, tags: updatedTodo.tags});
        setIsEditing(false);
    }
    if(isEditing){
        return(
            <TodoForm submitAction = {handleSubmit} todo={todo}/>

        )
    }
    const hoverEffects = 'hover:-translate-1 hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-500 hover:border-2 [&:hover>span>svg]:text-cyan-500'
    return(
        <div className={`bg-gray-100 rounded-lg p-2 my-3 h-16 font-makh
            select-none
            flex justify-between
            transition-all duration-300 ease-in-out 
            ${todo.done ? 'opacity-50' : hoverEffects}`}
            onDoubleClick={handleDoubleClick}>
            <span >
            <todo.icon className='inline text-5xl mr-2 text-black'/>
            <p className={`text-xl md:text-2xl inline ${todo.done ? 'line-through' : ''} align-middle`}>{todo.content}</p>
            </span>
            <span>
                <p className={`text-xl md:text-2xl inline align-middle text-cyan-600`}>{todo.tags}</p>
                <button onClick={handleEdit} 
                    className='h-full font-makh text-xl md:text-2xl px-2 ml-2 
                        border-2 border-gray-300 rounded-xl
                        hover:text-white hover:bg-black
                        transition-all duration-300 ease-in-out cursor-pointer'
                        >edit</button>
            </span>
               

        </div>
    )
}

export default TodoList