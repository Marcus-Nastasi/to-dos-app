import { useEffect, useState } from "react";
import { FaX } from 'react-icons/fa6';
import ErrorBox from "../Handler/ErrorBox";

export default function FormEdit({ func, user }: any) {
   const [ error, setError ] = useState<boolean>();
   const [ errorMessage, setErrorMessage ] = useState<string>();
   const [ closeButton, setCloseButton ] = useState<string>('#353535');
   const [ bgTheme, setBgTheme ] = useState<string>();
   const [ bgCard, setBgCard ] = useState<string>();
   const [ textThemeColor, setTextThemeColor ] = useState<string>();

   useEffect(() => {

      (localStorage.getItem('theme') === 'light') ? setBgTheme('') : setBgTheme('bg-slate-900');
      (localStorage.getItem('theme') === 'light') ? setBgCard('bg-neutral-200') : setBgCard('bg-neutral-700');
      (localStorage.getItem('theme') === 'light') ? setTextThemeColor('text-slate-700') : setTextThemeColor('text-slate-50');

   }, []);

   async function handleUpdate(e: any): Promise<void> {
      e.preventDefault();

      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const uid: string = document.cookie.split('UID=')[1];
      const url: string = `https://server.todos.rolemberg.net.br/api/user/update/${parseInt(uid)}/`;

      const [ n, em, op, np ]: any = [ document.getElementById('name'), document.getElementById('email'), document.getElementById('currentPassword'), document.getElementById('newPassword') ];

      try {
         const request: Response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ name: n.value, email: em.value, currentPassword: op.value, newPassword: np.value }),
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(request.status !== 202) {
            handleError('error while updating');
            return
         }

         document.cookie = 'Bearer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
         document.cookie = 'UID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

         window.open('/login', '_self');
      } catch(e: any) {
         handleError(e.message);
      }
   };

   async function handleDeleteUser(e: any): Promise<void> {
      e.preventDefault();

      const response: string | null = prompt('type your e-mail');

      if(response !== user.email) return;

      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const uid: string = document.cookie.split('UID=')[1];
      const url: string = `https://server.todos.rolemberg.net.br/api/user/delete/${parseInt(uid)}/`;

      try {
         const request: Response = await fetch(url, {
            method: 'DELETE',
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(request.status !== 202) {
            console.log('status error');
            return
         }

         console.log('ok');
      } catch(e: any) {
         console.warn(e.message);
      }
   }
  
   const handleError = (e: string): void => {
      user
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 4000);
      return
   };

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');

   return(
      <>
         <form className={`h-screen w-screen flex flex-col items-center pt-20 ${textThemeColor}`}>

            {error ? <ErrorBox message={errorMessage} />: ''}

            <FaX
               onMouseOver={handleCloseBtnColorIn}
               onMouseLeave={handleCloseBtnColorOut}
               color={closeButton}
               onClick={func}
               size={22}
               className='fixed top-8 lg:right-10 right-5 hover:cursor-pointer'
            />

            <h2 className=" text-4xl mb-10">Update user</h2>

            <div className={`flex flex-col w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12 rounded-md shadow-sm shadow-neutral-500 p-4 ${bgCard}`}>
               <label className=" text-lg" htmlFor="name">Name:</label>
               <input className="p-1 rounded-sm mb-5 text-slate-950" type="text" name="name" id="name" />

               <label className=" text-lg" htmlFor="email">E-mail:</label>
               <input className="p-1 rounded-sm mb-5 text-slate-950" type="text" name="email" id="email" />

               <label className=" text-lg" htmlFor="currentPassword">Current password:</label>
               <input className=" p-1 rounded-sm mb-5 text-slate-950" type="password" name="currentPassword" id="currentPassword" />

               <label className=" text-lg" htmlFor="newPassword">New password:</label>
               <input className=" p-1 rounded-sm mb-5 text-slate-950" type="password" name="newPassword" id="newPassword" />

               <button onClick={handleUpdate} className=" self-center w-fit px-6 py-1 font-semibold border rounded-md border-blue-300 bg-blue-400 hover:bg-blue-300 text-white hover:text-slate-100">
                  Update
               </button>

               <button onClick={handleDeleteUser} className=" self-center w-fit px-6 py-1 font-medium mt-10 border rounded-md border-red-300 bg-red-400 hover:bg-red-300 text-white hover:text-slate-100">
                  Delete
               </button>
            </div>

         </form>
      </>
   );
};



