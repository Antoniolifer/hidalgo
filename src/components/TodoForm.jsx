/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { GiTrashCan } from "react-icons/gi";

import IconDisplay from "./IconDisplay";
function TodoForm({ submitAction, todo = {}, handleDelete = () => {} }) {
  const [text, setText] = useState(todo?.content || "");
  const [tags, setTags] = useState(todo?.tags || "");
  const [icon, setIcon] = useState(todo?.icon || "GiScrollUnfurled");

  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text !== "") {
      submitAction({ content: text, tags, icon });
      setText("");
      setTags("");
      // setIcon('GiScrollUnfurled');
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <form
        className="text-center h-32 flex-wrap md:flex-nowrap md:h-16 p-1 w-full m-auto flex shadow-lg mt-3 shadow-cyan-500/50 rounded-lg border-white border-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="What's next?"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          className="bg-white w-8/10 rounded-sm mb-1 md:mb-0 text-xl md:text-2xl p-2 font-makh grow"
        />
        <input
          type="text"
          placeholder="Tag/category"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="bg-white w-4/10 rounded-sm text-xl md:text-2xl md:ml-1 p-2 font-makh grow focus:shadow-cyan-500"
        />
        {todo?.content && <DeleteButton handleDelete={handleDelete} />}
        <button
          type="submit"
          className="inline bg-white px-5 text-xl md:text-2xl rounded-xl ml-1 font-makh border-2 border-gray-300 cursor-pointer
                        hover:text-white hover:bg-black
                        transition-all duration-300 ease-in-out"
        >
          {todo?.content ? "update" : "add"}
        </button>
      </form>
      <IconDisplay setIcon={setIcon} prevSelected={icon} />
    </>
  );
}

function DeleteButton({ handleDelete }) {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handleDelete();
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className="bg-red-400 text-white px-1 md:px-2 text-xl md:text-2xl rounded-xl ml-1 font-makh border-2 border-gray-300 cursor-pointer
                        hover:text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/75
                        transition-all duration-300 ease-in-out"
    >
      <GiTrashCan className="mb-1 text-3xl md:text-4xl" />
    </button>
  );
}
export default TodoForm;
