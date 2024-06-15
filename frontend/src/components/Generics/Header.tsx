import { useState } from 'react';
import { FaEllipsisV, FaAlignJustify } from 'react-icons/fa';

export default function Header({ title }: any) {
   const [ menuBg, setMenuBg ] = useState<string>('#353535');
   const [ pointsBg, setPointsBg ] = useState<string>('#353535');

   const handleMenuColorIn = () => setMenuBg('#838383');
   const handleMenuColorOut = () => setMenuBg('#353535');
   const handlePointsColorIn = () => setPointsBg('#838383');
   const handlePointsColorOut = () => setPointsBg('#353535');

   return(
      <>
         <div className=" flex justify-between w-screen pt-8">
            <div className=" pl-5">

               <FaAlignJustify
                  onMouseOver={handleMenuColorIn}
                  onMouseLeave={handleMenuColorOut}
                  className=' hover:cursor-pointer'
                  size={23}
                  color={menuBg}
               />

            </div>

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


