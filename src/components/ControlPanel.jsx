/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";

function ControlPanel({
  search,
  setSearch,
  clearTodos,
  restartDemo,
  isSorting,
  setIsSorting,
}) {
  return (
    <div className="text-center md:text-end my-1 flex justify-between">
      <ClearAllButton clearTodos={clearTodos} />
      <RestartButton restartDemo={restartDemo} />
      <SortToggle isSorting={isSorting} setIsSorting={setIsSorting} />

      <SearchInput search={search} setSearch={setSearch} />
    </div>
  );
}

function SearchInput({ search, setSearch }) {
  return (
    <input
      className="w-1/4 p-1 bg-gray-400 focus:bg-gray-200 focus:placeholder:text-gray-400 placeholder:text-gray-300 text-xl sm:text-2xl rounded-xl text-center font-makh"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      placeholder="Search... &#128270;"
    ></input>
  );
}
function RestartButton({ restartDemo }) {
  return (
    <button
      onClick={restartDemo}
      className="bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out w-1/4 sm:w-1/5 rounded-xl border-2 border-gray-300 cursor-pointer text-md sm:text-lg md:text-xl md:ml-1 px-2 font-makh"
    >
      Restart Demo
      <VscDebugRestart className="inline ml-1 mb-1 align-center" />
    </button>
  );
}
function ClearAllButton({ clearTodos }) {
  const [confirming, setConfirming] = useState(false);

  const handleConfirm = () => {
    setConfirming(false);
    clearTodos();
  };
  const handleFirstClick = () => {
    setConfirming(true);
  };
  useEffect(() => {
    if (!confirming) {
      return;
    }

    const timeout = setTimeout(() => {
      setConfirming(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [confirming]);

  if (confirming) {
    return (
      <button
        onClick={handleConfirm}
        className="inline bg-red-500 px-2 mr-1 text-white w-1/4 sm:w-1/5
                            text-md sm:text-lg md:text-xl rounded-xl font-makh 
                            border-2 border-gray-300 cursor-pointer
                            hover:text-white hover:bg-red-700
                            transition-all duration-300 ease-in-out"
      >
        Delete all?
      </button>
    );
  }

  return (
    <button
      onClick={handleFirstClick}
      className="inline w-1/4 sm:w-1/5 bg-white mr-1 px-2 
                text-md sm:text-lg md:text-xl rounded-xl font-makh 
                border-2 border-gray-300 cursor-pointer
                hover:bg-red-300
                transition-all duration-300 ease-in-out"
    >
      Clear todos
    </button>
  );
}
function SortToggle({ isSorting, setIsSorting }) {
  const handleChange = () => {
    setIsSorting((prev) => !prev);
  };
  return (
    <div
      className="w-1/5 text-center self-center text-xl text-white font-makh
        flex flex-col items-center mx-2 leading-none"
    >
      <label htmlFor="sort" className="select-none">
        Sort by tags
      </label>
      <input
        className="w-5 h-5 mt-1"
        type="checkbox"
        name="sort"
        id="sort"
        checked={isSorting}
        onChange={handleChange}
      />
    </div>
  );
}

export default ControlPanel;
