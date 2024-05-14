import React, { useRef } from "react";
// import openai from "../utils/openai";

const GptSearchBar = () => {
  const inputValue = useRef(null);

  const handleGptSearchClick = async () => {
    const searchTxt = inputValue.current.value;
    console.log(searchTxt);

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "assistant", content: searchTxt }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults.choices);
  };

  return (
    <div className="w-[50%] m-auto pt-28">
      <form
        className="p-4 bg-black flex gap-3 rounded-md shadow-[0px_0px_10px_#fff]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="p-2 w-full rounded-md focus-visible:outline-none"
          ref={inputValue}
        />
        <button
          className="bg-red-600 text-white px-2 rounded-md w-[15%]"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
