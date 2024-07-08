import { useEffect, useState } from "react";
import FormEdit from "./components/Account/FormEdit";
import User from "./components/Interface/User/User";
import ErrorBox from "./components/Handler/ErrorBox";

export default function Account() {
   const [ edit, setEdit ] = useState<string>('hidden');
   const [ user, setUser ] = useState<User>();
   const [ error, setError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();
   const [ bgTheme, setBgTheme ] = useState<string>();
   const [ bgFormTheme, setBgFormTheme ] = useState<string>();
   const [ bgCard, setBgCard ] = useState<string>();
   const [ textThemeColor, setTextThemeColor ] = useState<string>();

   useEffect(() => {

      if(!document.cookie) window.open('/login', '_self');

      const handleGetUser = async(): Promise<void> => {
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
         const uid: string = document.cookie.split('UID=')[1];
         const url: string = `https://server.todos.rolemberg.net.br/api/user/get/${parseInt(uid)}/`;

         if(!token || !uid) {
            handleError('no token or user');
            window.open('/login', '_self');
            return
         }

         try {
            const request: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(request.status != 200) {
               handleError('error: something went wrong, try again later');
               return;
            }

            const user: User = await request.json();

            setUser(user);
         } catch(e: any) {   
            handleError(e.message);
         }
      };
      handleGetUser();

      (localStorage.getItem('theme') === 'light') ? setBgTheme('') : setBgTheme('bg-slate-900');
      (localStorage.getItem('theme') === 'light') ? setBgFormTheme('bg-white') : setBgFormTheme('bg-slate-900');
      (localStorage.getItem('theme') === 'light') ? setBgCard('bg-neutral-200') : setBgCard('bg-neutral-700');
      (localStorage.getItem('theme') === 'light') ? setTextThemeColor('text-slate-700') : setTextThemeColor('text-slate-50');

   }, []);

   function logOff(): void {
      const confirmation: boolean = confirm('Are you sure you want to log off?');

      if(!confirmation) return

      document.cookie = 'Bearer=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'UID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      window.open('/login', '_self');
      return
   }

   const handleEdit = (): void => edit === 'hidden' ? setEdit('') : setEdit('hidden');

   document.addEventListener('keydown', (e: any) => {
      (e.key == 'Escape' && edit === '') ? setEdit('hidden') : '';
      (e.altKey && e.key === 't') ? setEdit('') : '';
   });

   const handleError = (e: string): void => {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 4000);
      return
   };

   return(
      <div className={`${bgTheme}`}>
         <div className={`${edit} w-screen h-screen absolute top-0 overflow-y-scroll overflow-x-hidden ${bgFormTheme}`}>
            <FormEdit func={handleEdit} user={user} />
         </div>

         {error ? <ErrorBox message={errorMessage} /> : ''}

         <div className={`flex flex-col items-center min-h-screen max-h-fit w-screen p-10 text-lg overflow-x-hidden ${textThemeColor} selection:select-none`}>

            <div className={` w-full md:w-10/12 lg:w-8/12 xl:w-6/12 h-fit border p-4 flex flex-col justify-between items-center rounded-md border-neutral-300 ${bgCard}`}>
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

               <button onClick={handleEdit} className="font-medium px-6 py-0.5 mt-5 rounded-md border border-neutral-300 text-slate-50 bg-neutral-500 hover:bg-neutral-400">
                  Edit
               </button>
            </div>

            <div className={`mt-10 w-full md:w-10/12 lg:w-8/12 xl:w-6/12 h-fit border p-4 flex justify-between items-center rounded-md border-neutral-300 ${bgCard}`}>
               <p className=" font-medium md:text-lg">Log off</p>
               
               <button onClick={logOff} className="font-medium px-5 py-0.5 rounded-md border border-red-300 text-slate-50 bg-red-500 hover:bg-red-400">
                  Log off
               </button>
            </div>
         </div>
      </div>
   );
};

