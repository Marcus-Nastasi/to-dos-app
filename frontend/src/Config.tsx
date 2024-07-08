import { useEffect, useState } from "react";

export default function Config() {
   const [ themeText, setThemeText ] = useState<string>();

   useEffect(() => {

      if(localStorage.getItem('theme') === 'dark') setThemeText('Light');
      else setThemeText('Dark');

   }, []);

   function handleThemeChange(e: any): void {
      e.preventDefault();

      if(themeText === 'Dark') {
         setThemeText('Light');
         localStorage.setItem('theme', 'dark');
      }

      if(themeText === 'Light') {
         setThemeText('Dark');
         localStorage.setItem('theme', 'light');
      }
   };

   return(
      <div className="flex justify-center min-h-screen max-h-fit w-screen p-10">
         <div className=" w-full md:w-10/12 lg:w-8/12 xl:w-6/12 h-fit border p-4 flex justify-between items-center rounded-md border-neutral-300 bg-neutral-200">
            <p className=" font-semibold md:text-lg">
               Theme
            </p>
            
            <button 
               onClick={handleThemeChange} 
               className="font-medium px-5 py-0.5 rounded-md border border-neutral-400 text-slate-700 hover:text-slate-50 bg-neutral-300 hover:bg-neutral-500"
            >
               {themeText}
            </button>
         </div>
      </div>
   );
};

