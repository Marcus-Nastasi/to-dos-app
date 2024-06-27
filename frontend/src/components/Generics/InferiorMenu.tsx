import { useState } from 'react';
import { FaSquarePlus } from 'react-icons/fa6';

export default function InferiorMenu({ func }: any) {
   const [ btnBg, setBtnBg ] = useState<string>('#353535');

   const handleMenuColorIn = () => setBtnBg('#838383');
   const handleMenuColorOut = () => setBtnBg('#353535');

   return(
      <>
         <div className='z-40 w-screen h-24 flex justify-center items-center fixed bottom-0'>

            <FaSquarePlus
               onMouseOver={handleMenuColorIn}
               onMouseOut={handleMenuColorOut}
               onClick={func}
               className='z-50 opacity-100 hover:cursor-pointer'
               size={60}
               color={btnBg}
            />
            
         </div>
      </>
   );
};


