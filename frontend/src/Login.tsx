import { useState } from "react";
import FormCad from "./components/Login/FormCad";
import FormLogin from "./components/Login/FormLogin";

export default function Login() {
   const [ log, setLog ] = useState<boolean>(true);

   const handleChangeForm = () => log ? setLog(false) : setLog(true);

   return(
      <>
         <div className=" p-10 flex flex-col justify-center items-center">
            <h1 className=" p-3 mb-2 border-b border-slate-800 text-4xl font-semibold">To-Dos App</h1>
            <h2 className=" p-2 text-3xl font-semibold">Login</h2>
         </div>

         <div className=" flex justify-evenly text-2xl pb-5">
            <p onClick={handleChangeForm}>Login</p>
            <p onClick={handleChangeForm}>Cadaster</p>
         </div>

         {log ? <FormLogin /> : <FormCad />}
         
      </>
   );
};


