export default function StatusFilter() {
   return(
      <>
         <div className=" flex justify-around">

            <div className=" flex justify-center items-center py-1 px-5 border rounded-3xl border-slate-800 bg-green-200 hover:cursor-pointer hover:bg-green-300">
               <p className=" text-xl">Done</p>
            </div>

            <div className=" flex justify-center items-center py-1 px-5 border rounded-3xl border-slate-800 bg-orange-200 hover:cursor-pointer hover:bg-orange-300">
               <p className=" text-xl">Progress</p>
            </div>

            <div className=" flex justify-center items-center py-1 px-5 border rounded-3xl border-slate-800 bg-red-200 hover:cursor-pointer hover:bg-red-300">
               <p className=" text-xl">Pending</p>
            </div>

         </div>
      </>
   );
};


