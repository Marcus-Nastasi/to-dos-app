import { useState } from 'react';
import { FaEllipsisV, FaAlignJustify } from 'react-icons/fa';
import MenuOp from './MenuOp';

export default function Header({ title }: any) {
   const [ menuBg, setMenuBg ] = useState<string>('#353535');
   const [ pointsBg, setPointsBg ] = useState<string>('#353535');
   const [ showMenu, setShowMenu ] = useState<string>('hidden');

   const handleMenuColorIn = (): void => setMenuBg('#838383');
   const handleMenuColorOut = (): void => setMenuBg('#353535');
   const handlePointsColorIn = (): void => setPointsBg('#838383');
   const handlePointsColorOut = (): void => setPointsBg('#353535');

   const handleMenu = (): void => showMenu === 'hidden' ? setShowMenu('') : setShowMenu('hidden');

   return(
      <>
         <div className=" flex justify-between w-screen pt-8">
            <div className=" pl-5">

               <FaAlignJustify
                  onMouseOver={handleMenuColorIn}
                  onMouseLeave={handleMenuColorOut}
                  onClick={handleMenu}
                  className=' hover:cursor-pointer'
                  size={23}
                  color={menuBg}
               />

            </div>

            <MenuOp show={showMenu} func={handleMenu} />

            <div className=" pt-5">
               <h1 className=" text-3xl">
                  {title}
               </h1>
            </div>

            <div className=" pr-3">

               <FaEllipsisV 
                  onMouseOver={handlePointsColorIn}
                  onMouseLeave={handlePointsColorOut}
                  className=' hover:cursor-pointer'
                  size={23}
                  color={pointsBg}
               />

            </div>
         </div>
      </>
   );
}


