// import { useState } from "react";
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function Viewtodo({ func, todo }: any) {
   const [ closeButton, setCloseButton ] = useState<string>('#353535');

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');

   return(
      <div className={`w-screen h-screen bg-slate-200`}>
         <div className='w-screen p-8 flex justify-end fixed top-3'>
            <FaX
               onMouseOver={handleCloseBtnColorIn}
               onMouseLeave={handleCloseBtnColorOut}
               onClick={func}
               size={22}
               color={closeButton}
               className=''
            />
         </div>

         <div className='w-screen h-screen flex flex-col justify-start p-7 py-16 text-xl text-wrap bg-slate-100'>

            <div>
               <h1 className=' mb-3 text-5xl'>{todo.title}</h1>

               <h3 className=' mb-3 text-3xl'>{todo.client}</h3>

               <p className=' mb-3 text-2xl'>{todo.description}</p>
            </div>
            
            <div className=' mt-10'>
               <p className='mb-2'>{todo.link}</p>

               <p className='mb-2'>{`${todo.due[2]}/${todo.due[1]}/${todo.due[0]}`}</p>

               <p className='mb-2'>{`${todo.creation[2]}/${todo.creation[1]}/${todo.creation[0]}`}</p>

               <p className='mb-2'>{todo.status}</p>

               <p className='mb-2'>{todo.priority}</p>
            </div>
         </div>
      </div>
   );
};


