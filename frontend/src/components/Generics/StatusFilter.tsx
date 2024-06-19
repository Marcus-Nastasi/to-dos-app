export default function StatusFilter() {
   return(
      <>
         <div className=" flex justify-around">

            <div style={shadow} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-green-200 hover:cursor-pointer hover:bg-green-300">
               <p className=" text-xl">Done</p>
            </div>

            <div style={shadow} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-orange-200 hover:cursor-pointer hover:bg-orange-300">
               <p className=" text-xl">Progress</p>
            </div>

            <div style={shadow} className=" flex justify-center items-center py-1 px-5 rounded-3xl bg-red-200 hover:cursor-pointer hover:bg-red-300">
               <p className=" text-xl">Pending</p>
            </div>

         </div>
      </>
   );
};

const shadow: object = {
   boxShadow: '0 0 5px 0.2px lightgray'
}



