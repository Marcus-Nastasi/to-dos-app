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
            <div className=" pl-5">

               <FaAlignJustify
                  onMouseOver={handleMenuColorIn}
                  onMouseLeave={handleMenuColorOut}
                  onClick={handleMenuOp}
                  className=' hover:cursor-pointer'
                  size={23}
                  color={menuBg}
               />

            </div>

            <div className=' w-screen fixed top-0 flex justify-between'>
               <MenuOp 
                  show={showMenu} 
                  func={handleMenuOp} 
               />

               <MenuConfig
                  show={showConfig} 
                  func={handleMenuConfig} 
               />
            </div>

            <div className="">
               <h1 className=" text-3xl">
                  {title}
               </h1>
            </div>

            <div className=" pr-3">

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


