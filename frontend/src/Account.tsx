import { useEffect, useState } from "react";
import FormEdit from "./components/Account/FormEdit";
import User from "./components/Interface/User/User";

export default function Account() {
   const [ edit, setEdit ] = useState<string>('hidden');
   const [ user, setUser ] = useState<User>();

   useEffect(() => {

      if(!document.cookie) window.open('/login', '_self');

      const handleGetUser = async(): Promise<void> => {
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
         const uid: string = document.cookie.split('UID=')[1];
         const url: string = `http://3.219.123.52:8080/api/user/get/${parseInt(uid)}/`;

         if(!token || !uid) {
            // handleError('no token or user');
            window.open('/login', '_self');
            return
         }

         try {
            const request: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(request.status != 200) {
               // handleError('error: something went wrong, try again later');
               return;
            }

            const user: User = await request.json();

            setUser(user);
            // setLoading('hidden');
         } catch(e: any) {   
            // handleError(e.message);
         }
      };
      handleGetUser();

   }, []);

   const handleEdit = (): void => edit === 'hidden' ? setEdit('') : setEdit('hidden');

   document.addEventListener('keydown', (e: any) => {
      (e.key == 'Escape' && edit === '') ? setEdit('hidden') : '';
      (e.altKey && e.key === 't') ? setEdit('') : '';
   });

   return(
      <>
         <div className={`${edit} w-screen h-screen absolute top-0 overflow-y-scroll bg-white`}>
            <FormEdit func={handleEdit} user={user} />
         </div>

         <div className="flex justify-center min-h-screen max-h-fit w-screen p-10 text-lg text-slate-700 selection:select-none">

            <div className=" w-full md:w-10/12 lg:w-8/12 xl:w-6/12 h-fit border p-4 flex flex-col justify-between items-center rounded-md border-neutral-300 bg-neutral-200">
               <div className=" text-lg w-full flex justify-between items-center mb-3">
                  <p>User</p>
                  <p className="text-wrap w-40 ml-5">{user?.name}</p>
               </div>

               <div className=" text-lg w-full flex justify-between items-center text-wrap mb-3">
                  <p>E-mail</p>
                  <p>{user?.email}</p>
               </div>

               <div className=" text-lg w-full flex justify-between items-center">
                  <p>Password</p>
                  <p>************</p>
               </div>

               <button onClick={handleEdit} className="font-medium px-4 py-0.5 mt-5 rounded-md border border-neutral-600 text-slate-100 bg-neutral-500 hover:bg-neutral-400">
                  Edit
               </button>
            </div>
         </div>
      </>
   );
};

