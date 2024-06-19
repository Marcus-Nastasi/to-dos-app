import { useEffect, useState } from "react";
import ViewTodo from "../Todos/ViewTodo";

export default function TodoCard({ id, title, priority, date, todo }: any) {
   const [ priorColor, setPriorColor ] = useState<string>();
   const [ prior, setPrior ] = useState<string>();
   const [ bigCard, setBigCard ] = useState<string>('hidden');

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
         id
         setPrior('High');
         setPriorColor('bg-red-300');
      }

   }, []);

   const handleBigCardShow = () => bigCard == 'hidden' ? setBigCard('') : setBigCard('hidden');

   async function handleBigCard(e: any): Promise<void> {
      e.preventDefault();
      setBigCard('');
      return
   };

   return(
      <>
         <div className={`${bigCard} fixed top-0`}>
            <ViewTodo func={handleBigCardShow} todo={todo} />
         </div>

         <div 
            onClick={handleBigCard}
            className="m-5 p-4 rounded-3xl border border-slate-950"
         >

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


