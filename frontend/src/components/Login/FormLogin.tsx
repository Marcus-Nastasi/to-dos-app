export default function FormLogin() {
   return(
      <>
         <div className=" p-5">

            <form className="flex flex-col p-5 rounded-3xl shadow-lg shadow-slate-950 bg-slate-100">

               <label className=" text-2xl" htmlFor="input_email">E-mail</label>
               <input className=" mb-5 p-1 rounded-xl border border-slate-900" type="text" name="email" id="input_email" />

               <label className=" text-2xl" htmlFor="input_password">Password</label>
               <input className=" p-1 rounded-xl border border-slate-900" type="password" name="password" id="input_password" />

               <button className="self-center py-1 px-6 rounded-lg mt-5 border w-fit font-semibold border-slate-800 bg-slate-900 text-slate-50 hover:bg-slate-800">
                  Enter
               </button>

            </form>

         </div>
      </>
   );
};



