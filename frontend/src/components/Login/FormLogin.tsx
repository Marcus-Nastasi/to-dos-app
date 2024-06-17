export default function FormLogin() {

   async function getToken(e: any): Promise<void> {
      e.preventDefault();
      
      try {
         const [ email, pass ]: any = [ document.getElementById('input_email'), document.getElementById('input_password') ];
         const url: string = 'http://localhost:8080/api/auth/login/';

         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email: email.value, password: pass.value }),
            headers: new Headers({ 'content-type': 'application/json' })
         });

         if(req.status == 403) {
            console.log('wrong user or password') 
            return;
         };

         const token: string = await req.text();
         document.cookie = `Bearer=${token}`;

         window.open('/', '_self');

      } catch(e) {
         console.log(e);
      }
   };

   return(
      <div className=" p-5">

         <form className="flex flex-col p-5 rounded-3xl border-2 border-slate-400 bg-slate-50">

            <label className=" text-2xl" htmlFor="input_email">
               E-mail
            </label>
            <input 
               className=" indent-2 mb-5 p-1 rounded-xl bg-slate-200" 
               type="text" 
               name="email" 
               id="input_email" 
            />

            <label className=" text-2xl" htmlFor="input_password">
               Password
            </label>
            <input 
               className=" indent-2 p-1 rounded-xl bg-slate-200 " 
               type="password" 
               name="password" 
               id="input_password" 
            />

            <button 
               onClick={getToken}
               className="self-center py-1 px-6 rounded-lg mt-5 border w-fit font-semibold border-slate-800 bg-slate-900 text-slate-50 hover:bg-slate-800">
               Enter
            </button>

         </form>

      </div>
   );
};



