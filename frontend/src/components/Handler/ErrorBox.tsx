export default function ErrorBox({ message }: any) {
   return(
      <div className={`flex justify-center items-center w-screen fixed top-5 right-1 p-10 z-50`}>
         <div className="p-10 border px-20 rounded-md border-red-300 bg-red-200">
            <p>{message}</p>
         </div>
      </div>
   );
};



