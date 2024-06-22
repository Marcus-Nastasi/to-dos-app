import { useEffect, useState } from "react";
import { FaEllipsis } from 'react-icons/fa6';
import ViewTodo from "../Todos/ViewTodo";

export default function TodoCard({ id, title, priority, date, todo }: any) {
   const [ priorColor, setPriorColor ] = useState<string>();
   const [ prior, setPrior ] = useState<string>();
   const [ bigCard, setBigCard ] = useState<string>('hidden');
   const [ statusOptions, setStatusOptions ] = useState<string>('hidden');

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

   const handleStatusOptions = () => setStatusOptions('');

   return(
      <>
         <div className={`${bigCard} fixed top-0 z-40`}>
            <ViewTodo func={handleBigCardShow} todo={todo} />
         </div>

         <div
            style={shadow}
            className="m-5 p-4 z-0 rounded-3xl bg-slate-50 transition-all ease-in-out hover:-translate-x-2 hover:cursor-pointer hover:bg-slate-100"
         >

            <div className=" flex justify-between mb-4">
               <div 
                  onClick={handleBigCard}
               >
                  <p className=" text-2xl hover:underline">{title}</p>
               </div>

               <div onClick={handleStatusOptions}>
                  <p className="hover:cursor-pointer">
                     <FaEllipsis size={30} />
                  </p>

                  {/* to-do: implement mini section status options pratical handler */}

                  <div className={`${statusOptions}`}>
                     <div>
                        
                     </div>
                  </div>
               </div>
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

const shadow: object = {
   boxShadow: '0 0 10px 0.3px lightgray'
}



