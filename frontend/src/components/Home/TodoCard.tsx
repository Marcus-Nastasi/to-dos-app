import { useEffect, useState } from "react";

export default function TodoCart({ title, priority, date }: any) {
   const [ priorColor, setPriorColor ] = useState<string>();
   const [ prior, setPrior ] = useState<string>();

   useEffect(() => {
      
      if(priority == 'LOW') {
         setPrior('Low');
         setPriorColor('bg-green-300');
      }

      if(priority == 'MEDIUM') {
         setPrior('Medium');
         setPriorColor('bg-orange-300');
      }

      if(priority == 'HIGH') {
         setPrior('High');
         setPriorColor('bg-red-300');
      }

   }, []);

   return(
      <>
         <div className="m-5 p-4 rounded-3xl border border-slate-950">
            <div className=" flex justify-between mb-4">
               <div><p className=" text-2xl">{title}</p></div>

               <div><p className=" text-4xl -mt-4 hover:cursor-pointer hover:text-slate-500">...</p></div>
            </div>

            <div className=" mb-4">
               <div className="">
                  <p className={`${priorColor} py-2 px-3 w-fit h-fit rounded-3xl`}>
                     {prior}
                  </p>
               </div>
            </div>

            <div className=" flex items-center">
               <img className=" m-0.5 mr-2 mb-1 w-3 h-3" src="./img/calendar.png" alt="" />
               <p>{date}</p>
            </div>
         </div> 
      </>
   );
};


