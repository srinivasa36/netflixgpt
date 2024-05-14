import React from "react";

const VideoTitle = ({ title, overview, image }) => {
  return (
    <div className="absolute top-[50%] left-[4%] w-[100%] max-w-[50%]">
      {/* <img src={imgURL} alt={title} className="w-[40%] h-auto rounded-md" /> */}
      <h1 className="text-3xl mb-2 font-cursive text-white">{title}</h1>
      <p className="text-[#ffffffab] font-medium">{overview}</p>
      <div className="flex gap-3 mt-3">
        <button className="bg-green-600 font-medium text-[18px] text-white w-[15%] h-[40px] rounded-md">
          Play Now
        </button>
        <button className="border-[1px] border-[#00000082] w-[15%] h-[40px] rounded-md font-medium text-[18px] text-white hover:bg-[#000000a6] hover:text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
