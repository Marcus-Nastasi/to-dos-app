import { useEffect, useState } from 'react';
import { FaX, FaTrash, FaPenToSquare } from 'react-icons/fa6';
import ErrorBox from '../Handler/ErrorBox';

export default function Viewtodo({ func, todo }: any) {
   const [ closeButton, setCloseButton ] = useState<string>('#353535');
   const [ btnTrash, setBtnTrash ] = useState<string>('#353535');
   const [ btnEdit, setEdit ] = useState<string>('#353535');
   const [ priorColor, setPriorColor ] = useState<string>();
   const [ statusColor, setStatusColor ] = useState<string>();
   const [ error, setError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();

   useEffect(() => {
      
      if(todo.priority === 'LOW') setPriorColor('bg-green-300');

      if(todo.priority === 'MEDIUM') setPriorColor('bg-orange-300');

      if(todo.priority === 'HIGH') setPriorColor('bg-red-300');

      if(todo.status === 'PENDING') setStatusColor('text-red-800');

      if(todo.status === 'PROGRESS') setStatusColor('text-orange-600');

      if(todo.status === 'DONE') setStatusColor('text-green-800');

   }, []);

   async function handleDelete(e: any): Promise<void> {
      e.preventDefault();

      try {
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
         const url: string = `http://3.219.123.52:8080/api/todos/delete/${parseInt(todo.id)}/`;
         // const url: string = `http://192.168.0.76:8080/api/todos/delete/${parseInt(todo.id)}/`;

         if(!token || !todo.id) {
            handleError('no token or user');
            window.open('/login', '_self');
            return
         }

         const req: Response = await fetch(url, {
            method: 'DELETE',
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(req.status != 202) {
            handleError('error: cannot get this task');
            return
         }

         window.open('/', '_self');
      } catch(e: any) {
         handleError(e.message)
      }
   };

   const handleError = (e: string): void => {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 4000);
      return
   };

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');

   const handleBtnTrashIn = (): void => setBtnTrash('#838383');
   const handleBtnTrashOut = (): void => setBtnTrash('#353535');

   const handleBtnEditIn = (): void => setEdit('#838383');
   const handleBtnEditOut = (): void => setEdit('#353535');

   return(
      <div className={`w-screen min-h-screen max-h-full z-50 overflow-y-scroll bg-slate-100`}>

         {error ? <ErrorBox message={errorMessage} /> : ''}
         
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
               <h1 className=' mb-5 text-4xl rounded-l-lg w-fit'>{todo.title}</h1>

               <caption className=' text-slate-600'>client</caption>
               <h3 className=' mb-5 text-3xl rounded-l-lg w-fit'>{todo.client}</h3>
               
               <caption className=' text-slate-600'>description</caption>
               <p className=' mb-5 text-2xl rounded-l-lg w-fit '>{todo.description}</p>
            </div>
            
            <div className=' mt-10'>
               <caption className=' text-slate-600'>link</caption>
               <p className='mb-2'>{todo.link}</p>

               <caption className=' text-slate-600'>due</caption>
               <p className='mb-2'>{`${todo.due[2]}/${todo.due[1]}/${todo.due[0]}`}</p>

               <caption className=' text-slate-600'>creation</caption>
               <p className='mb-2'>{`${todo.creation[2]}/${todo.creation[1]}/${todo.creation[0]}`}</p>

               <caption className=' text-slate-600'>status</caption>
               <p className={`${statusColor} mb-2  font-semibold`}>{todo.status}</p>

               <caption className=' text-slate-600'>priority</caption>
               <p className={`${priorColor} py-2 px-3 w-fit my-2 lowercase h-fit rounded-3xl`}>{todo.priority}</p>
            </div>

            <div className=' mt-10 pb-40 flex flex-row-reverse w-full'>

               <FaTrash 
                  onClick={handleDelete}
                  onMouseOver={handleBtnTrashIn}
                  onMouseLeave={handleBtnTrashOut}
                  size={28}
                  className='ml-5 hover:cursor-pointer'
                  color={btnTrash}
               />

               <FaPenToSquare
                  onClick={() => window.open(`/update/todo/${todo.id}`, '_self')}
                  onMouseOver={handleBtnEditIn}
                  onMouseLeave={handleBtnEditOut}
                  size={28}
                  className=' hover:cursor-pointer'
                  color={btnEdit}
               />

            </div>
         </div>
      </div>
   );
};


