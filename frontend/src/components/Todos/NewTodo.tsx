import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';
import Todo from '../Interface/Todos/Todo';
import ErrorBox from '../Handler/ErrorBox';

export default function NewTodo({ show, func }: any) {
   const [ closeButton, setCloseButton ] = useState<string>();
   const [ error, setError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();
   const [ bgTheme, setBgTheme ] = useState<string>();
   const [ textThemeColor, setTextThemeColor ] = useState<string>();

   useEffect(() => {
      
      if(!document.cookie) window.open('/login', '_self');

      (localStorage.getItem('theme') === 'light') ? setBgTheme('bg-slate-50') : setBgTheme('bg-slate-900');
      (localStorage.getItem('theme') === 'light') ? setTextThemeColor('') : setTextThemeColor('text-slate-50');
      (localStorage.getItem('theme') === 'light') ? setCloseButton('#353535') : setCloseButton('#FFFFFF');

   }, []);

   async function handleInsertTodo(e: any): Promise<void> {
      e.preventDefault();

      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const url: string = `https://server.todos.rolemberg.net.br/api/todos/new/`;
      const [ title, client, description, link, due, priority ]: any = [ document.getElementById('title'), document.getElementById('client'), document.getElementById('description'), document.getElementById('link'), document.getElementById('due'), document.getElementById('priority') ];

      if(!due.value) {
         handleError('error: all inputs must not be null');
         return
      }

      const body: Todo = {
         user_id: parseInt(document.cookie.split('UID=')[1]),
         client: client.value,
         title: title.value,
         description: description.value,
         link: link.value,
         due: due.value,
         priority: priority.value
      };

      try {
         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(req.status != 201) {
            handleError('error: task not created');
            return
         };

         window.open('/', '_self');
      } catch(e: any) {
         handleError(e.message);
      }
   }

   const handleError = (e: string): void => {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 4000);
      return
   };

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => {
      setCloseButton('#353535');
      (localStorage.getItem('theme') === 'light') ? setCloseButton('#353535') : setCloseButton('#FFFFFF');
   };

   return(
      <div className={`${show} w-screen lg:w-8/12 xl:w-6/12 min-h-screen max-h-fit lg:min-h-96 overflow-y-scroll p-10 pb-56 z-50 shadow-lg shadow-neutral-600 ${bgTheme}`}>

         {error ? <ErrorBox message={errorMessage} /> : ''}

         <div className=" h-screen flex flex-col items-center">
            <div className="w-full flex justify-center text-3xl pb-20">
               <h2 className={`self-center font-semibold text-4xl ${textThemeColor}`}>
                  TASK
               </h2>

               <FaX
                  onMouseOver={handleCloseBtnColorIn}
                  onMouseLeave={handleCloseBtnColorOut}
                  color={closeButton}
                  onClick={func}
                  size={22}
                  className='fixed right-10 sm:relative sm:left-56 lg:left-64 xl:left-80 hover:cursor-pointer'
               />
            </div>

            <div className=" w-full h-full">
               <form className={`flex flex-col w-full h-full ${textThemeColor}`}>

                  <label className=" text-2xl mb-3" htmlFor="title">Title:</label>
                  <input className={`mb-5 p-1.5 rounded-none transition-all ease-in-out delay-0 border-b-2 border-orange-400 ${bgTheme} focus:outline-none focus: focus:border-b-4 focus:border-orange-700`} type="text" name="title" id="title" />

                  <label className="text-2xl mb-3" htmlFor="client">Client:</label>
                  <input className={`mb-5 p-1.5 rounded-none transition-all ease-in-out delay-0 border-b-2 border-orange-400 ${bgTheme} focus:outline-none focus:border-b-4 focus:border-orange-700`} type="text" name="client" id="client" />

                  <label className="text-2xl mb-3" htmlFor="description">Description:</label>
                  <input className={`mb-5 p-1.5 rounded-none transition-all ease-in-out delay-0 border-b-2 border-orange-400 ${bgTheme} focus:outline-none focus:border-b-4 focus:border-orange-700`} type="text" name="description" id="description" />

                  <label className="text-2xl mb-3" htmlFor="link">Link:</label>
                  <input className={`mb-5 p-1.5 rounded-none transition-all ease-in-out delay-0 border-b-2 border-orange-400 ${bgTheme} focus:outline-none focus:border-b-4 focus:border-orange-700`} type="text" name="link" id="link" />

                  <label className="text-2xl mb-3" htmlFor="due">Due:</label>
                  <input className={`mb-5 p-1.5 rounded-none transition-all ease-in-out delay-0 border-b-2 border-orange-400 ${bgTheme} focus:outline-none focus:border-b-4 focus:border-orange-700`} type="date" name="due" id="due" />

                  <label className="text-2xl mb-3" htmlFor="priority">Priority:</label>
                  <select className={`mb-10 p-3 rounded-none transition-all ease-in-out delay-0 border-b-2 border-orange-400 ${bgTheme} focus:outline-none focus:border-b-4 focus:border-orange-700`} name="priority" id="priority">
                     <option value="LOW">Low</option>
                     <option value="MEDIUM">Medium</option>
                     <option value="HIGH">High</option>
                  </select>

                  <button
                     onClick={handleInsertTodo}
                     style={ localStorage.getItem('theme') === 'light' ? shadow : shadowOnDark}
                     className={`px-7 py-1 w-fit text-lg font-medium self-center rounded-md text-slate-100 hover:text-white border border-green-600 bg-green-500 hover:bg-green-400`}
                     type="submit">
                        Create
                  </button>

               </form>
            </div>
         </div>
      </div>
   );
};

const shadow: object = {
   boxShadow: '0 0 10px 0.6px lightgray'
}

const shadowOnDark: object = {
   boxShadow: '0 0 10px 0.6px black'
}
