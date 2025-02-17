/* eslint-disable react/prop-types */
import { useState } from "react";
import TodoForm from './TodoForm';
import iconMap from '../utility/IconMapping';


function Todo( {todo, toggleDone, updateTodo, deleteTodo}){
    const [isEditing, setIsEditing] = useState(false);
    
    const [isDeleting, setIsDeleting] = useState(false);
    const deletionStyles = ' animate-swipeoff';

    console.log('is deleting:', isDeleting);
    const handleDelete = () => {
        setIsDeleting(true);
        setIsEditing(false);

        setTimeout( () => {
            setIsDeleting(false);
            deleteTodo(todo.id);
            console.log('during');

        }, 600);
        console.log('after');

    }

    const handleDoubleClick = () => {
        toggleDone(todo.id);
    }
    const handleEdit = () => {
        setIsEditing(true);

    }
    const handleSubmit = (updatedTodo) => {
        updateTodo({...todo, content:updatedTodo.content, tags: updatedTodo.tags, icon: updatedTodo.icon});
        setIsEditing(false);
    }
    if(isEditing){
        return(
            
            <TodoForm submitAction = {handleSubmit} todo={todo} handleDelete={handleDelete}/>

        )
    }
    const Icon = iconMap[todo.icon]; 

    const hoverEffects = 'hover:-translate-1 hover:shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-500 hover:border-2 [&:hover>span>svg]:text-cyan-500'
    return(
        <div className={`bg-gray-100 rounded-lg p-1 my-3 h-20 sm:h-16 font-makh
            select-none
            flex justify-between
            transition-all duration-300 ease-in-out 
            ${isDeleting ? deletionStyles : ''}
            ${todo.done ? 'opacity-50' : hoverEffects}`}
            onDoubleClick={handleDoubleClick}>

            <span className='flex items-center'>
            <Icon className= {`${isDeleting ? deletionStyles : ''}text-5xl mr-2 text-black`}/>

            <p className={`leading-none self-center text-lg sm:text-xl md:text-2xl ${todo.done ? 'line-through' : ''}`}>{todo.content}</p>
            </span>
            <span className="flex flex-col items-center justify-center sm:flex-row ">
                <p className={`text-lg sm:text-xl md:text-2xl inline align-middle text-cyan-600`}>{todo.tags}</p>
                <button onClick={handleEdit} 
                    className='h-2/3 sm:h-full font-makh text-lg sm:text-xl md:text-2xl px-2 ml-2 
                        border-2 border-gray-300 rounded-xl
                        hover:text-white hover:bg-black
                        transition-all duration-300 ease-in-out cursor-pointer'
                        >edit</button>
            </span>
               

        </div>
    )
}

export default Todo;