export default function FormLogin() {

   async function getToken(e: any) {
      e.preventDefault();
      
      try {
         const [ email, pass ]: any = [ document.getElementById('input_email'), document.getElementById('input_password') ];
         const url = 'http://localhost:8080/api/auth/login/';

         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ email: email.value, password: pass.value }),
            headers: new Headers({ 'content-type': 'application/json' })
         });

         const token: string = await req.text();
         document.cookie = `token=${token}`;
         
      } catch(e) {
         console.log(e);
      }
   };

   return(
      <div className=" p-5">

         <form className="flex flex-col p-5 rounded-3xl shadow-lg shadow-slate-950 bg-slate-100">

            <label className=" text-2xl" htmlFor="input_email">E-mail</label>
            <input className=" indent-2 mb-5 p-1 rounded-xl border border-slate-900" type="text" name="email" id="input_email" />

            <label className=" text-2xl" htmlFor="input_password">Password</label>
            <input className=" indent-2 p-1 rounded-xl border border-slate-900" type="password" name="password" id="input_password" />

            <button 
               onClick={getToken}
               className="self-center py-1 px-6 rounded-lg mt-5 border w-fit font-semibold border-slate-800 bg-slate-900 text-slate-50 hover:bg-slate-800">
               Enter
            </button>

         </form>

      </div>
   );
};



