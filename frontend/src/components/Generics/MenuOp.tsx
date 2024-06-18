import { FaX } from 'react-icons/fa6';

export default function MenuOp({ show, func }: any) {

   // const handleCloseMenu = (): void => {};

   return(
      <div className={`${show} min-h-screen max-h-fit w-screen fixed top-0 p-10 bg-slate-100`}>
         <div className=' flex flex-col'>
            <div className=' self-end'>
               <FaX
                  onClick={func}
                  size={22}
               />
            </div>

            <div className=' self-center'>

               <div className=' flex flex-col text-2xl'>
                  <a className=' my-2' href="/">Home</a>
                  <a href="/dashboard">Dashboard</a>
               </div>

            </div>
         </div>
      </div>
   );
};


