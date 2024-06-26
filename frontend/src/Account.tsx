import { useState } from "react";
import FormEdit from "./components/Account/FormEdit";

export default function Account() {
   const [ edit, setEdit ] = useState<string>('hidden');

   const handleEdit = (): void => edit === 'hidden' ? setEdit('') : setEdit('hidden');

   document.addEventListener('keydown', (e: any) => {
      (e.key == 'Escape' && edit === '') ? setEdit('hidden') : '';
      (e.altKey && e.key === 't') ? setEdit('') : '';
   });

   return(
      <>
         <div className={`${edit} w-screen h-screen absolute top-0 overflow-y-scroll bg-white`}>
            <FormEdit func={handleEdit} />
         </div>

         <div className=" min-h-screen max-h-fit w-screen p-10 text-lg text-slate-700 selection:select-none">

            <div className=" w-full h-fit border p-4 flex flex-col justify-between items-center rounded-md border-neutral-300 bg-neutral-200">
               <div className=" text-lg w-full flex justify-between items-center">
                  <p>User</p>
                  <p>username</p>
               </div>

               <div className=" text-lg w-full flex justify-between items-center">
                  <p>E-mail</p>
                  <p>email</p>
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

