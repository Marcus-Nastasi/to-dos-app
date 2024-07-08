import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function MenuOp({ show, func }: any) {
   const [ closeButton, setCloseButton ] = useState<string>('#353535');
   const [ bgColor, setBgColor ] = useState<string>();
   const [ textColor, setTextColor ] = useState<string>();

   useEffect(() => {

      (localStorage.getItem('theme') === 'light') ? setBgColor('bg-slate-100') : setBgColor('bg-slate-950');
      (localStorage.getItem('theme') === 'light') ? setTextColor('text-slate-700') : setTextColor('text-slate-100');

   }, []);

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');

   return(
      <div className={`${show} min-h-screen max-h-fit w-screen fixed top-0 p-10 z-10 shadow-lg shadow-neutral-600 ${bgColor} lg:w-1/3`}>
         <div className=' flex flex-col'>
            <div className=' self-end'>
               <FaX
                  onMouseOver={handleCloseBtnColorIn}
                  onMouseLeave={handleCloseBtnColorOut}
                  color={closeButton}
                  onClick={func}
                  size={22}
                  className='hover:cursor-pointer'
               />
            </div>

            <div className=' self-center'>

               <div className=' flex flex-col text-2xl'>
                  <a id='menuHomeLink' className={`my-2 ${textColor} hover:text-slate-600`} href="/">
                     Home
                  </a>
                  <a id='menuDashLink' className={`${textColor} hover:text-slate-600`} href="/dashboard">
                     Dashboard
                  </a>
               </div>

            </div>
         </div>
      </div>
   );
};


