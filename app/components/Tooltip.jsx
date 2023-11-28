"use client"
import {useState} from "react"
import Link from 'next/link';

const Tooltip = () => {
   const [isVisible, setIsVisible] = useState(false);

    const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    
      <div className="relative">
       { isVisible === true ? ( <div  className="absolute z-20 bottom-[170%] left-1/2 block -translate-x-1/2 flex-col items-start gap-4 max-[767px]:w-[90vw] max-[767px]:max-w-[400px]">
                 <div className="relative block flex-col items-start gap-4 bg-[#f2f2f7] dark:bg-gray-800 p-6 max-[767px]:max-w-[400px] rounded-md w-[90vw] md:w-[480px]">
                   <div className="absolute flex -translate-x-1/2 flex-col items-center justify-center text-[#f2f2f7] pb-5"></div>
                   <div className="mb-4 flex flex-row items-center gap-4">
                     <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/648987dfb7a00eb37413b593_Rectangle%2034%20(1).png" alt="" className="inline-block h-10 w-10" />
                     <h5 className="text-xl font-bold">Check out this new feature</h5>
                   </div>
                   <p className="text-[#636262] dark:text-gray-400 max-[479px]:text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.</p>
                   <div className="mt-4 flex w-full flex-col items-end">
                     <Link href="#" className="inline-block items-center bg-black dark:bg-gray-700 px-6 py-3 text-center font-semibold text-white">
                       Learn More
                     </Link>
                   </div>
                 </div>
               </div>) : (
                <></>
               )}
        <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6489873134f4996d88414bc6_Info.svg" alt="" className="inline-block cursor-pointer" type="button" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}/>
      </div>
    
  );
};

export default Tooltip;