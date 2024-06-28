import { useState } from 'react';
import { FaEllipsisV, FaAlignJustify } from 'react-icons/fa';
import MenuOp from './MenuOp';
import MenuConfig from './MenuConfig';

export default function Header({ title }: any) {
   const [ menuBg, setMenuBg ] = useState<string>('#353535');
   const [ pointsBg, setPointsBg ] = useState<string>('#353535');
   const [ showMenu, setShowMenu ] = useState<string>('hidden');
   const [ showConfig, setShowConfig ] = useState<string>('hidden');

   const handleMenuColorIn = (): void => setMenuBg('#838383');
   const handleMenuColorOut = (): void => setMenuBg('#353535');
   
   const handlePointsColorIn = (): void => setPointsBg('#838383');
   const handlePointsColorOut = (): void => setPointsBg('#353535');

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
                  color={menuBg}
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

               <h1 className="text-3xl hover:cursor-default selection:select-none">
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


