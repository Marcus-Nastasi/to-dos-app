import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function MenuConfig({ show, func }: any) {
   const [ closeButton, setCloseButton ] = useState<string>('#353535');
   const [ bgColor, setBgColor ] = useState<string>();
   const [ textColor, setTextColor ] = useState<string>();

   useEffect(() => {

      (localStorage.getItem('theme') === 'light') ? setBgColor('bg-slate-100') : setBgColor('bg-slate-950');
      (localStorage.getItem('theme') === 'light') ? setTextColor('text-slate-950') : setTextColor('text-slate-100');

   }, []);

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');

   return(
      <div className={`${show} min-h-screen max-h-fit w-screen fixed top-0 right-0 p-10 shadow-lg shadow-neutral-600 ${bgColor} lg:w-1/3`}>
         <div className='flex flex-col'>
            <div className=''>
               <FaX
                  onMouseOver={handleCloseBtnColorIn}
                  onMouseLeave={handleCloseBtnColorOut}
                  color={closeButton}
                  onClick={func}
                  size={22}
                  className='hover:cursor-pointer'
               />
            </div>

            <div className='self-center'>

               <div className='flex flex-col text-2xl'>
                  <a id='menuDashLink' className={`my-2 ${textColor} hover:text-slate-700`} href="/user/configurations">
                     Configurations
                  </a>
                  <a className={`my-2 ${textColor} hover:text-slate-700`} href="/user/account">
                     Account
                  </a>
                  <a className={`${textColor} hover:text-slate-700`} href="/about">
                     About
                  </a>
               </div>

            </div>
         </div>
      </div>
   );
};


