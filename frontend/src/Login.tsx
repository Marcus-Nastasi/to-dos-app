import { useState } from "react";
import FormCad from "./components/Login/FormCad";
import FormLogin from "./components/Login/FormLogin";

export default function Login() {
   const [ log, setLog ] = useState<boolean>(true);

   const handleCadaster = () => log ? setLog(false) : 0;
   const handleLogin = () => !log ? setLog(true) : 0;

   return(
      <div className="flex flex-col min-h-screen max-h-fit w-screen bg-slate-100 text-slate-800">         
         <div className=" w-screen p-10 flex flex-col justify-center items-center">
            <img className=" w-40 lg:w-48" src="./img/logo-3.png" alt="" />
         </div>

         <div className=" w-screen flex justify-center">
            <div className="flex justify-evenly text-2xl pb-5 w-screen lg:w-3/12">
               <p onClick={handleLogin} className=" hover:underline hover:cursor-pointer">Login</p>
               <p onClick={handleCadaster} className=" hover:underline hover:cursor-pointer">Register</p>
            </div>
         </div>

         {log ? <FormLogin /> : <FormCad />}
         
      </div>
   );
};




