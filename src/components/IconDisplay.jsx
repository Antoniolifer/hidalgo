/* eslint-disable react/prop-types */
import { useState } from "react";
import iconMap from "../utility/IconMapping";



function IconDisplay({setIcon, prevSelected = ''}) {
  const items = [];
  const [selected, setSelected] = useState(prevSelected);
  for(const prop in iconMap){
    items.push({name: prop, component: iconMap[prop]})
  }
  const handleSelect = (e) => {
    setIcon(e.currentTarget.value);
    setSelected(e.currentTarget.value);

  }
  return (
    <div className="flex flex-wrap text-gray-400 text-3xl justify-around my-5">
        {items.map((item) => {
            
            return <button key ={item.name} value ={item.name}onClick={e => handleSelect(e)}className={` ${item.name === selected ? 'text-cyan-300 -translate-y-1': 'hover:text-cyan-300 hover:-translate-y-1'} transition-all duration-300 ease-in-out`}><item.component/></button>
        })}
    </div>
  )
}

export default IconDisplay