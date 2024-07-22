import { useEffect, useState } from "react";

export default function StatusFilter({ doneFilter, progressFilter, pendingFilter, clear }: any) {
   const [ shadowBoxes, setShadowBoxes ] = useState<object>();

   useEffect(() => {

      (localStorage.getItem('theme') === 'light') ? setShadowBoxes(shadowL) : setShadowBoxes(shadowD);

   }, []);

   return(
      <>
         <div className=" flex justify-around md:w-11/12 lg:w-7/12">

            <div onClick={pendingFilter} style={shadowBoxes} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-red-200 hover:cursor-pointer hover:bg-red-300">
               <p className=" text-xl">Pending</p>
            </div>

            <div onClick={progressFilter} style={shadowBoxes} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-orange-200 hover:cursor-pointer hover:bg-orange-300">
               <p className=" text-xl">Progress</p>
            </div>

            <div onClick={doneFilter} style={shadowBoxes} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-green-200 hover:cursor-pointer hover:bg-green-300">
               <p className=" text-xl">Done</p>
            </div>

         </div>

         <div className=" w-screen flex pt-5 px-4 md:px-24 lg:px-64 xl:px-80 2xl:px-96">
            <p onClick={clear} className="w-fit p-1 rounded-md bg-blue-200 border border-blue-300 hover:bg-blue-100 hover:cursor-pointer">
               Clear filters
            </p>
         </div>
      </>
   );
};

const shadowL: object = {
   boxShadow: '0 0 5px 0.2px lightgray'
}

const shadowD: object = {
   boxShadow: '0 0 5px 0.2px black'
}

