import { useEffect, useState } from 'react';
import { FaEllipsisV, FaAlignJustify } from 'react-icons/fa';
import MenuOp from './MenuOp';
import MenuConfig from './MenuConfig';

export default function Header({ title }: any) {
   const [ menuConfigBg, setmenuConfigBg ] = useState<string>();
   const [ pointsBg, setPointsBg ] = useState<string>();
   const [ showMenu, setShowMenu ] = useState<string>('hidden');
   const [ showConfig, setShowConfig ] = useState<string>('hidden');
   const [ titleColor, setTitleColor ] = useState<string>('text-slate-900');

   // theme styles
   useEffect(() => {

      if(localStorage.getItem('theme') === 'dark') {
         setmenuConfigBg('#FFFFFF');
         setPointsBg('#FFFFFF');
         setTitleColor('text-slate-100');
      } else {
         setmenuConfigBg('#353535');
         setPointsBg('#353535');
      }

   }, []);

   const handleMenuColorIn = (): void => setmenuConfigBg('#838383');
   const handleMenuColorOut = (): void => localStorage.getItem('theme') === 'light' ? setmenuConfigBg('#353535') : setmenuConfigBg('#FFFFFF');
   
   const handlePointsColorIn = (): void => setPointsBg('#838383');
   const handlePointsColorOut = (): void => localStorage.getItem('theme') === 'light' ? setPointsBg('#353535') : setPointsBg('#FFFFFF');

   const handleMenuOp = (): void => showMenu === 'hidden' ? setShowMenu('') : setShowMenu('hidden');
   const handleMenuConfig = (): void => showConfig === 'hidden' ? setShowConfig('') : setShowConfig('hidden');

   return(
      <>
         <div className=" flex justify-between w-screen pt-8">
            <div className=" pl-5 lg:pl-10">

               <FaAlignJustify
                  onMouseOver={handleMenuColorIn}
                  onMouseLeave={handleMenuColorOut}
                  onClick={handleMenuOp}
                  className=' hover:cursor-pointer'
                  size={23}
                  color={menuConfigBg}
               />

            </div>

            <div className=' z-50 w-screen fixed top-0 flex justify-between'>
               <MenuOp 
                  show={showMenu} 
                  func={handleMenuOp} 
               />

               <MenuConfig
                  show={showConfig} 
                  func={handleMenuConfig} 
               />
            </div>

            <div className="flex flex-col justify-between items-center">
               <img className='w-32 mb-5 -ml-3 md:-ml-6 -mt-5 selection:select-none' src="./img/logo-3.png" alt="" />

               <h1 className={`text-3xl hover:cursor-default selection:select-none ${titleColor}`}>
                  {title}
               </h1>
            </div>

            <div className=" pr-3 lg:pr-8">

               <FaEllipsisV 
                  onMouseOver={handlePointsColorIn}
                  onMouseLeave={handlePointsColorOut}
                  onClick={handleMenuConfig}
                  className=' hover:cursor-pointer'
                  size={23}
                  color={pointsBg}
               />

            </div>
         </div>
      </>
   );
}


