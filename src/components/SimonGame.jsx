import React, { useState, useRef, useEffect } from "react"
import GameBtn from "./GameBtn";

const colors = ["green", "red", "yellow", "blue"];

function SimonGame() {
  // states
  const [sequence, setSequence] = useState([]);
  const [playing, setPlaying] = useState(false);

  // Functions
  

  const handelNextLevel = () => {
    if (!playing) {
      addNewcolor();
    }
  };


  return (
    // Main container
    <div className="flex justify-center items-center bg-neutral-800 text-white w-screen h-screen">
      {/* Game container */}
      <div className="relative flex flex-col justify-center items-center">
        {/* Green and red container */}
        <div>
          {/* Green button */}
          <GameBtn border="rounded-tl-full" bg="bg-green-500" />

          {/* Red button */}
          <GameBtn border="rounded-tr-full" bg="bg-red-500" />
        </div>

        {/* Yellow and Bluw container */}
        <div>
          {/* Yellow button */}
          <GameBtn border="rounded-bl-full" bg="bg-yellow-400" />

          {/* Blue button */}
          <GameBtn border="rounded-br-full" bg="bg-blue-500" />
        </div>

        {/* Play button */}
        <button 
          className="absolute bg-neutral-900 text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105" 
          onClick={handelNextLevel}>
          Play
        </button>
      </div>
    </div>
  )
}

export default SimonGame