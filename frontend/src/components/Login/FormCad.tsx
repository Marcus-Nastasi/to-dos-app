export default function FormCad() {

   async function cadaster(e: any): Promise<void> {
      e.preventDefault();
      
      try {
         const [ name, email, pass ]: any = [ 
            document.getElementById('input_name'), 
            document.getElementById('input_email'), 
            document.getElementById('input_password') 
         ];

         const url: string = 'http://localhost:8080/api/user/new/';

         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ name: name.value, email: email.value, password: pass.value }),
            headers: new Headers({ 'content-type': 'application/json' })
         });

         if(req.status !== 201) console.log('error creating');

         window.open('/login', '_self');
         
      } catch(e) {
         console.log(e);
      }
   };

   return(
      <div className=" p-5">

         <form className="flex flex-col p-5 rounded-3xl border-2 border-slate-400 bg-slate-50">

            <label className=" text-2xl" htmlFor="input_name">Name</label>
            <input 
               className=" indent-2 mb-5 p-1 rounded-xl bg-slate-200" 
               type="text" 
               name="name" 
               id="input_name" 
            />

            <label className=" text-2xl" htmlFor="input_email">E-mail</label>
            <input 
               className=" indent-2 mb-5 p-1 rounded-xl bg-slate-200" 
               type="text" 
               name="email" 
               id="input_email" 
            />

            <label className=" text-2xl" htmlFor="input_password">Password</label>
            <input 
               className=" indent-2 p-1 rounded-xl bg-slate-200" 
               type="password" 
               name="password" 
               id="input_password" 
            />

            <button 
               onClick={cadaster}
               className="self-center py-1 px-6 rounded-lg mt-5 border w-fit font-semibold border-slate-800 bg-slate-900 text-slate-50 hover:bg-slate-800"
            >
               Enter
            </button>

         </form>

      </div>
   );
};



