export default function Header({ title }: any) {
   return(
      <>
         <div className=" flex justify-between w-screen pt-8">
            <div className=" pl-5">
               <img className=" w-12" src="./img/hamb.png" alt="" />
            </div>

            <div className=" pt-5">
               <h1 className=" text-2xl">{title}</h1>
            </div>

            <div className=" pr-3">
               <img className=" w-11" src="./img/dots.png" alt="" />
            </div>
         </div>
      </>
   );
}


