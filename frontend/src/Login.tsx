import { useState } from "react";
import FormCad from "./components/Login/FormCad";
import FormLogin from "./components/Login/FormLogin";

export default function Login() {
   const [ log, setLog ] = useState<boolean>(true);

   const handleCadaster = () => log ? setLog(false) : 0;
   const handleLogin = () => !log ? setLog(true) : 0;

   return(
      <div className=" min-h-screen max-h-fit text-slate-800">
         <div className=" p-10 flex flex-col justify-center items-center">
            <h1 className=" p-3 mb-2 text-4xl font-semibold italic">
               to-dos app
            </h1>
         </div>

         <div className=" flex justify-evenly text-2xl pb-5">
            <p onClick={handleLogin} className=" hover:underline hover:cursor-pointer">Login</p>
            <p onClick={handleCadaster} className=" hover:underline hover:cursor-pointer">Cadaster</p>
         </div>

         {log ? <FormLogin /> : <FormCad />}
         
      </div>
   );
};




