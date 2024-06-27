import { useState } from "react";
import ErrorBox from "../Handler/ErrorBox";

export default function FormCad() {
   const [ error, setError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();

   async function cadaster(e: any): Promise<void> {
      e.preventDefault();
      
      try {
         const [ name, email, pass ]: any = [ 
            document.getElementById('input_name'), 
            document.getElementById('input_email'), 
            document.getElementById('input_password') 
         ];

         const url: string = 'http://3.219.123.52:8080/api/user/new/';

         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ name: name.value, email: email.value, password: pass.value }),
            headers: new Headers({ 'content-type': 'application/json' })
         });

         if(req.status !== 201) {
            handleLoginError('error: something went wrong, try again later');
            return
         };

         window.open('/login', '_self');
      } catch(e) {
         console.log(e);
      }
   };

   function handleLoginError(e: any): void {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 3000);
   };

   return(
      <div className="p-5 flex justify-center">

         {error ? <ErrorBox message={errorMessage} /> : ''}

         <form className="flex flex-col p-5 rounded-3xl border-2 border-slate-400 bg-slate-50 w-11/12 md:w-8/12 lg:w-6/12 xl:w-5/12">

            <label className=" text-2xl mb-2" htmlFor="input_name">Name</label>
            <input 
               className="indent-2 mb-5 p-1.5 rounded-lg border border-neutral-600 bg-slate-100" 
               type="text" 
               name="name" 
               id="input_name" 
            />

            <label className=" text-2xl mb-2" htmlFor="input_email">E-mail</label>
            <input 
               className="indent-2 mb-5 p-1.5 rounded-lg border border-neutral-600 bg-slate-100" 
               type="text" 
               name="email" 
               id="input_email" 
            />

            <label className=" text-2xl mb-2" htmlFor="input_password">Password</label>
            <input 
               className="indent-2 mb-5 p-1.5 rounded-lg border border-neutral-600 bg-slate-100" 
               type="password" 
               name="password" 
               id="input_password" 
            />

            <button 
               onClick={cadaster}
               className="self-center px-7 py-1 text-lg font-medium mt-5 rounded-md border border-blue-500 text-slate-50 bg-blue-400 hover:bg-blue-500"
               type="submit"
            >
               Enter
            </button>

         </form>

      </div>
   );
};



