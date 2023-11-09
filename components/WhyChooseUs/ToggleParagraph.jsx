import React, { useState, useEffect } from "react";

const ToggleParagraph = ({ title, paragraph }) => {
  const [isLastParagraphHidden, setIsLastParagraphHidden] = useState(true);

  const handleClick = () => {
    setIsLastParagraphHidden(!isLastParagraphHidden);
  };

  return (
    <div id="my-div" className="border-b-4 border-violet-700 my-4">
      <div className="flex justify-between hover:text-violet-700 hover:cursor-pointer" onClick={handleClick}>
        <p className={`font-bold text-xl pt-4 ${isLastParagraphHidden ? "mb-12" : ""} `} >
       {title}
        </p>
        <p className={`text-4xl font-bold  `}>{isLastParagraphHidden ? "+" : "-"}</p>
      </div>
   
        <p
          className="font-medium text-gray-500 my-4 transition-all"
          style={{ display: isLastParagraphHidden ? "none" : "" }}
        >
          {paragraph}
        </p>
    
    </div>
  );
};

export default ToggleParagraph;
