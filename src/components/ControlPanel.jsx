/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"



function ControlPanel({search, setSearch, clearTodos, restartDemo}){

    return(
        <div className='text-center md:text-end my-1 flex justify-between'>
            <ClearAllButton clearTodos={clearTodos} /> 
            <RestartButton restartDemo={restartDemo} /> 
            <SearchInput search={search} setSearch={setSearch}/>
        </div>
    )
}

function SearchInput({search, setSearch}){
    return(
        <input 
            className='w-3/5 p-2 bg-gray-400 focus:bg-gray-200 focus:placeholder:text-gray-400 placeholder:text-gray-300 text-2xl rounded-xl text-center font-makh md:w-1/4'
            value={search} 
            onChange={(e)=> {
                setSearch(e.target.value)
            }} placeholder='Search... &#128270;'>

        </input>
    )
}
function RestartButton({restartDemo}){
    return(
        <button onClick={restartDemo} className="bg-white w-2/10 rounded-xl border-2 border-gray-300 cursor-pointer text-xl md:text-2xl md:ml-1 p-2 font-makh">Restart Demo</button>)
}

function ClearAllButton({clearTodos}){
    const [confirming, setConfirming] = useState(false);


    const handleConfirm = () => {
        setConfirming(false);
        clearTodos();
    }
    const handleFirstClick = () => {
        setConfirming(true);
    }
    useEffect( () => {
        if(!confirming){
            return;
        }
        
        const timeout = setTimeout(() => {
            setConfirming(false);
        }, 3000)
        
        return( ()=> {
            clearTimeout(timeout);
        })
    },[confirming])

    if(confirming){
        return(
            <button 
                onClick ={handleConfirm}
                className='inline bg-red-500 px-5 text-white w-2/5 sm:w-1/5
                            text-xl md:text-2xl rounded-xl font-makh 
                            border-2 border-gray-300 cursor-pointer
                            hover:text-white hover:bg-red-700
                            transition-all duration-300 ease-in-out'>Delete all?
            </button>
        )
    }

    return(
        <button 
            onClick ={handleFirstClick}
            className='inline w-2/5 sm:w-1/5 bg-white px-5 text-xl md:text-2xl rounded-xl font-makh border-2 border-gray-300 cursor-pointer
                        hover:bg-red-300
                        transition-all duration-300 ease-in-out'>Clear todos</button>
    )
}

export default ControlPanel;