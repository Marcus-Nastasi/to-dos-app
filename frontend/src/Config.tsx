import { useState } from "react";

export default function Config() {
   const [ themeText, setThemeText ] = useState<string>('Dark');

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
            <p>Theme</p>
            <button onClick={handleThemeChange} className="font-medium px-2 py-0.5 rounded-md border border-neutral-600 text-slate-100 bg-neutral-500 hover:bg-neutral-400">
               {themeText}
            </button>
         </div>
      </div>
   );
};

