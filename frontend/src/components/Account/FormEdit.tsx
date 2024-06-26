import { useState } from "react";
import { FaX } from 'react-icons/fa6';
import ErrorBox from "../Handler/ErrorBox";

export default function FormEdit({ func }: any) {
   const [ error, setError ] = useState<boolean>();
   const [ errorMessage, setErrorMessage ] = useState<string>();
   const [ closeButton, setCloseButton ] = useState<string>('#353535');

   async function handleUpdate(e: any): Promise<void> {
      e.preventDefault();

      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const uid: string = document.cookie.split('UID=')[1];
      // const url: string = `http://192.168.0.76:8080/api/user/update/${parseInt(uid)}/`;
      const url: string = `http://3.219.123.52:8080/api/user/update/${parseInt(uid)}/`;

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

         window.open('/login/', '_self');
      } catch(e: any) {
         handleError(e.message);
      }
   };
  
  // Exemplo de uso
   const handleError = (e: string): void => {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 4000);
      return
   };

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');

   return(
      <>
         <form className="h-screen w-screen flex flex-col items-center pt-20">

            {error ? <ErrorBox message={errorMessage} />: ''}

            <FaX
               onMouseOver={handleCloseBtnColorIn}
               onMouseLeave={handleCloseBtnColorOut}
               color={closeButton}
               onClick={func}
               size={22}
               className='fixed top-8 right-5 hover:cursor-pointer'
            />

            <h2 className=" text-4xl mb-10">Update user</h2>

            <div className="flex flex-col w-11/12 rounded-md shadow-sm shadow-neutral-500 p-4 bg-neutral-200">
               <label className=" text-lg" htmlFor="name">Name:</label>
               <input className="p-1 rounded-sm mb-5" type="text" name="name" id="name" />

               <label className=" text-lg" htmlFor="email">E-mail:</label>
               <input className="p-1 rounded-sm mb-5" type="text" name="email" id="email" />

               <label className=" text-lg" htmlFor="currentPassword">Current password:</label>
               <input className=" p-1 rounded-sm mb-5" type="password" name="currentPassword" id="currentPassword" />

               <label className=" text-lg" htmlFor="newPassword">New password:</label>
               <input className=" p-1 rounded-sm mb-5" type="password" name="newPassword" id="newPassword" />

               <button onClick={handleUpdate} className=" self-center w-fit px-6 py-1 border rounded-md border-neutral-500 bg-neutral-300 hover:bg-neutral-400">
                  Update
               </button>
            </div>

         </form>
      </>
   );
};



