export default function StatusFilter({ doneFilter, progressFilter, pendingFilter, clear }: any) {

   return(
      <>
         <div className=" flex justify-around">

            <div style={shadow} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-green-200 hover:cursor-pointer hover:bg-green-300">
               <p onClick={doneFilter} className=" text-xl">Done</p>
            </div>

            <div style={shadow} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-orange-200 hover:cursor-pointer hover:bg-orange-300">
               <p onClick={progressFilter} className=" text-xl">Progress</p>
            </div>

            <div style={shadow} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-red-200 hover:cursor-pointer hover:bg-red-300">
               <p onClick={pendingFilter} className=" text-xl">Pending</p>
            </div>

         </div>

         <div className=" w-screen flex pt-5 px-4">
            <p onClick={clear} className="w-fit p-1 rounded-md bg-blue-200 border border-blue-300 hover:bg-blue-100 hover:cursor-pointer">
               Clear filters
            </p>
         </div>
      </>
   );
};

const shadow: object = {
   boxShadow: '0 0 5px 0.2px lightgray'
}



