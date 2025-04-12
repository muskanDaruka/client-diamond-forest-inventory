import React from "react";

function Selector({options, customClass}) {
  return <select className={`text-white border rounded-md w-full focus:outline-none p-1 ${customClass}`} name="" id="">
      {
        options.map((option,index)=>(
            <option key={index} value={option.value} className="text-black">{option.value}</option>
        ))
      }
  </select>;
}

export default Selector;
