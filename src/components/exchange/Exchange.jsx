import React from "react";
import {MdArrowDropDown} from 'react-icons/md'

const Exchange = () => {
  return (

    <div
      id="exchange"
      className={` flex flex-col justify gap-2 p-4 row-span-2 col-span-3 rounded-xl bg-boxDark text-white`}
    >
		{/* Title  */}
      <div className=" w-full h-1/6 flex items-center">
		<div className=" text-lg font-bold mb-1"> Exchange coins</div>
	  </div>
	  {/* Title  */}

		{/* dropdowns  */}
      <div className=" flex gap-2 ">
         {/* Sell */}
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className=" text-red-600">Sell</h1>
          <div className=" bg-dropdownBoxDark p-2 items-center flex rounded-lg">
            <input className=" w-4/5 bg-transparent outline-none  " type="text" />
            <span className=" h-8 flex items-center justify-center"><MdArrowDropDown size={30}/></span>
          </div>
        </div>

        {/* Buy */}
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className=" text-green-500">Buy</h1>
          <div className=" bg-dropdownBoxDark p-2 items-center flex rounded-lg">
            <input className=" w-4/5 bg-transparent outline-none  " type="text" />
            <span className=" h-8 flex items-center justify-center"><MdArrowDropDown size={30}/></span>
          </div>
        </div>
      </div>
		{/* dropdowns  */}

		{/* showing values */}
      <div className="flex  gap-2 w-full p-2">
        {/* Enter value  */}
        <div className="flex flex-col gap-2 w-full">
          <span className=" opacity-70">Enter Value</span>
          <input className=" bg-transparent" type="text" placeholder="Avl:0" />
        </div>
		{/* Buy vaule  */}
        <div className="flex flex-col gap-2 w-full">
          <span className=" w-full opacity-70">Buy Value</span>
          <span>0</span>
        </div>
      </div>
		{/* showing values */}
    {/* Exchange Button  */}
	  <div className="w-full flex items-center justify-center">
		<button className=" bg-exchBtn p-3 py-2 rounded-md ">Exchange</button>
	  </div>
    </div>
  );
};

export default Exchange;
			
