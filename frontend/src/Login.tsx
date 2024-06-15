import { useState } from "react";
import FormCad from "./components/Login/FormCad";
import FormLogin from "./components/Login/FormLogin";

export default function Login() {
   const [ log, setLog ] = useState<boolean>(true);

   const handleChangeForm = () => log ? setLog(false) : setLog(true);

   return(
      <>
         <div className=" p-10 flex justify-center items-center">
            <h2 className=" text-3xl font-semibold">Login</h2>
         </div>

         <div className=" flex justify-evenly text-2xl pb-5">
            <p onClick={handleChangeForm}>Login</p>
            <p onClick={handleChangeForm}>Cadaster</p>
         </div>

         {log ? <FormLogin /> : <FormCad />}
         
      </>
   );
};


