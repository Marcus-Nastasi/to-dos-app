export default function SeccessBox({ message }: any) {
   return(
      <div className={` flex justify-center items-center w-screen fixed top-5 p-10 z-50`}>
         <div className="p-10 border px-20 rounded-md border-green-300 bg-green-200">
            <p>{message}</p>
         </div>
      </div>
   );
};



