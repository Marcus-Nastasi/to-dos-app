import { useState } from "react";
import Login from "../Interface/Login/Login";

export default function FormLogin() {
   const [ error, setError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();

   async function getToken(e: any): Promise<void> {
      e.preventDefault();
      
      try {
         const [ email, pass ]: any = [ document.getElementById('input_email'), document.getElementById('input_password') ];
         const url: string = 'http://3.219.123.52:8080/api/auth/login/';

         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email: email.value, password: pass.value }),
            headers: new Headers({ 'content-type': 'application/json' })
         });

         if(req.status == 403) {
            handleLoginError('wrong user or password');
            return;
         };

         const res: Login = await req.json();

         document.cookie = `Bearer=${res.token}`;
         document.cookie = `UID=${res.uid}`;

         window.open('/', '_self');

      } catch(e: any) {
         handleLoginError(e.message);
      }
   };

   function handleLoginError(e: any): void {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 3000);
   };

   return(
      <div className="p-5">

         {
            error ?

            <div className={`flex justify-center m-4`}>
               <div className="text-center w-9/12 p-10 rounded-md bg-red-400">
                  <p className=" text-lg">Error:</p>
                  <p>{errorMessage}</p>
               </div>
            </div>

            :

            ''
         }
         
         <form className="flex flex-col p-5 rounded-3xl border-2 border-slate-400 bg-slate-50">

            <label className=" text-2xl" htmlFor="input_email">
               E-mail
            </label>
            <input 
               className=" indent-2 mb-5 py-2 rounded-xl bg-slate-200" 
               type="text" 
               name="email" 
               id="input_email" 
            />

            <label className=" text-2xl" htmlFor="input_password">
               Password
            </label>
            <input 
               className=" indent-2 py-2 rounded-xl bg-slate-200 " 
               type="password" 
               name="password" 
               id="input_password" 
            />

            <button 
               onClick={getToken}
               className="self-center px-5 py-1 w-11/12 text-lg font-medium mt-5 rounded-sm bg-slate-300 hover:bg-slate-400"
               type="submit"   
            >
               Enter
            </button>

         </form>

      </div>
   );
};



