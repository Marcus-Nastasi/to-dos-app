import { useState } from 'react';
import { FaX, FaTrash, FaPenToSquare } from 'react-icons/fa6';

export default function Viewtodo({ func, todo }: any) {
   const [ closeButton, setCloseButton ] = useState<string>('#353535');
   const [ btnTrash, setBtnTrash ] = useState<string>('#353535');
   const [ btnEdit, setEdit ] = useState<string>('#353535');

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');

   const handleBtnTrashIn = (): void => setBtnTrash('#838383');
   const handleBtnTrashOut = (): void => setBtnTrash('#353535');

   const handleBtnEditIn = (): void => setEdit('#838383');
   const handleBtnEditOut = (): void => setEdit('#353535');

   async function handleDelete(e: any): Promise<void> {
      e.preventDefault();

      try {
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
         const url: string = `http://3.219.123.52:8080/api/todos/delete/${parseInt(todo.id)}/`;

         if(!token || !todo.id) {
            console.log('error');
            return
         }

         const req: Response = await fetch(url, {
            method: 'DELETE',
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(req.status != 202) {
            console.log('error');
            return
         }

         window.open('/', '_self');

      } catch(e) {
         console.log(e);
      }
   }

   return(
      <div className={`w-screen h-screen z-50 bg-slate-100`}>
         <div className='w-screen p-8 flex justify-end fixed top-3'>
            <FaX
               onMouseOver={handleCloseBtnColorIn}
               onMouseLeave={handleCloseBtnColorOut}
               onClick={func}
               size={22}
               color={closeButton}
               className=' hover:cursor-pointer'
            />
         </div>

         <div className='w-screen h-screen flex flex-col justify-start p-7 py-16 text-xl text-wrap bg-slate-100'>

            <div>
               <caption className=' text-slate-600'>title</caption>
               <h1 className=' mb-5 text-5xl'>{todo.title}</h1>

               <caption className=' text-slate-600'>client</caption>
               <h3 className=' mb-5 text-3xl'>{todo.client}</h3>
               
               <caption className=' text-slate-600'>description</caption>
               <p className=' mb-5 text-2xl'>{todo.description}</p>
            </div>
            
            <div className=' mt-10'>
               <caption className=' text-slate-600'>link</caption>
               <p className='mb-2'>{todo.link}</p>

               <caption className=' text-slate-600'>due</caption>
               <p className='mb-2'>{`${todo.due[2]}/${todo.due[1]}/${todo.due[0]}`}</p>

               <caption className=' text-slate-600'>creation</caption>
               <p className='mb-2'>{`${todo.creation[2]}/${todo.creation[1]}/${todo.creation[0]}`}</p>

               <caption className=' text-slate-600'>status</caption>
               <p className='mb-2'>{todo.status}</p>

               <caption className=' text-slate-600'>priority</caption>
               <p className='mb-2'>{todo.priority}</p>
            </div>

            <div className=' mt-10 flex'>

               <FaTrash 
                  onClick={handleDelete}
                  onMouseOver={handleBtnTrashIn}
                  onMouseLeave={handleBtnTrashOut}
                  size={28}
                  className='mr-10 hover:cursor-pointer'
                  color={btnTrash}
               />

               <FaPenToSquare
                  onMouseOver={handleBtnEditIn}
                  onMouseLeave={handleBtnEditOut}
                  size={28}
                  className='hover:cursor-pointer'
                  color={btnEdit}
               />

            </div>
         </div>
      </div>
   );
};


