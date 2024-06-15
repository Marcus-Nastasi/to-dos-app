import { FaSquarePlus } from 'react-icons/fa6';

export default function InferiorMenu() {
   return(
      <>
         <div className=' w-screen h-24 flex justify-center items-center fixed bottom-0 bg-slate-200 bg-opacity-20 rounded-2xl'>
            <FaSquarePlus
               className=' opacity-100'
               size={60}
            />
         </div>
      </>
   );
};


