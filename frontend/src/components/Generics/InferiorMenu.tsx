import { useEffect, useState } from 'react';
import { FaSquarePlus } from 'react-icons/fa6';

export default function InferiorMenu({ func }: any) {
   const [ btnBg, setBtnBg ] = useState<string>();

   useEffect(() => {

      if(localStorage.getItem('theme') === 'dark') {
         setBtnBg('#FFFFFF');
      } else {
         setBtnBg('#353535');
      }

   }, []);

   const handleMenuColorIn = () => setBtnBg('#838383');
   const handleMenuColorOut = () => localStorage.getItem('theme') === 'light' ? setBtnBg('#353535') : setBtnBg('#FFFFFF');

   return(
      <>
         <div className='z-40 w-screen pointer-events-none h-24 flex justify-center items-center fixed bottom-0'>

            <FaSquarePlus
               onMouseOver={handleMenuColorIn}
               onMouseOut={handleMenuColorOut}
               onClick={func}
               className='z-50 opacity-100 pointer-events-auto hover:cursor-pointer'
               size={60}
               color={btnBg}
            />
            
         </div>
      </>
   );
};


