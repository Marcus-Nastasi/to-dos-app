import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';
import Todo from '../Interface/Todos/Todo';

export default function NewTodo({ show, func }: any) {
   const [ closeButton, setCloseButton ] = useState<string>('#353535');

   useEffect(() => {
      
      if(!document.cookie) window.open('/login', '_self');

   }, []);

   async function handleInsertTodo(e: any): Promise<void> {
      e.preventDefault();

      try {
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
         // const url: string = 'http://3.219.123.52:8080/api/todos/new/';
         const url: string = 'http://127.0.0.1:8080/api/todos/new/';

         const [ title, client, description, link, due, priority ]: any = [
            document.getElementById('title'), 
            document.getElementById('client'), 
            document.getElementById('description'),
            document.getElementById('link'), 
            document.getElementById('due'), 
            document.getElementById('priority')
         ];

         const body: Todo = {
            user_id: parseInt(document.cookie.split('UID=')[1]),
            client: client.value,
            title: title.value,
            description: description.value,
            link: link.value,
            due: due.value,
            priority: priority.value
         };

         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(req.status != 201) console.log('error');

         window.open('/', '_self');

      } catch(e) {
         console.log(e);
      }
   }

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');
   
   return(
      <div className={`${show} w-screen min-h-screen max-h-fit absolute top-0 p-10 z-50 pb-40 bg-slate-50`}>
         <div className=" h-screen flex flex-col items-center">
            <div className="w-full flex justify-center text-3xl pb-20">
               <h2 className=' font-semibold text-4xl'>
                  TASK
               </h2>

               <FaX
                  onMouseOver={handleCloseBtnColorIn}
                  onMouseLeave={handleCloseBtnColorOut}
                  color={closeButton}
                  onClick={func}
                  size={22}
                  className='fixed right-10 hover:cursor-pointer'
               />
            </div>

            <div className=" w-full h-full">
               <form className="flex flex-col w-full h-full">

                  <label className=" text-2xl mb-3" htmlFor="title">Title:</label>
                  <input className={`mb-5 p-1.5 rounded-l-xl transition-all ease-in-out delay-0 border-b-2 border-orange-400 bg-slate-50 focus:outline-none focus: focus:border-b-4 focus:border-orange-700`} type="text" name="title" id="title" />

                  <label className="text-2xl mb-3" htmlFor="client">Client:</label>
                  <input className={`mb-5 p-1.5 rounded-l-xl transition-all ease-in-out delay-0 border-b-2 border-orange-400 bg-slate-50 focus:outline-none focus:border-b-4 focus:border-orange-700`} type="text" name="client" id="client" />

                  <label className="text-2xl mb-3" htmlFor="description">Description:</label>
                  <input className={`mb-5 p-1.5 rounded-l-xl transition-all ease-in-out delay-0 border-b-2 border-orange-400 bg-slate-50 focus:outline-none focus:border-b-4 focus:border-orange-700`} type="text" name="description" id="description" />

                  <label className="text-2xl mb-3" htmlFor="link">Link:</label>
                  <input className={`mb-5 p-1.5 rounded-l-xl transition-all ease-in-out delay-0 border-b-2 border-orange-400 bg-slate-50 focus:outline-none focus:border-b-4 focus:border-orange-700`} type="text" name="link" id="link" />

                  <label className="text-2xl mb-3" htmlFor="due">Due:</label>
                  <input className={`mb-5 p-1.5 rounded-l-xl transition-all ease-in-out delay-0 border-b-2 border-orange-400 bg-slate-50 focus:outline-none focus:border-b-4 focus:border-orange-700`} type="date" name="due" id="due" />

                  <label className="text-2xl mb-3" htmlFor="priority">Priority:</label>
                  <select className={`mb-10 p-3 rounded-l-xl transition-all ease-in-out delay-0 border-b-2 border-orange-400 bg-slate-50 focus:outline-none focus:border-b-4 focus:border-orange-700`} name="priority" id="priority">
                     <option value="LOW">Low</option>
                     <option value="MEDIUM">Medium</option>
                     <option value="HIGH">High</option>
                  </select>

                  <button
                     onClick={handleInsertTodo}
                     style={shadow}
                     className="px-5 py-1 text-lg font-medium bg-slate-300" 
                     type="submit">
                        CREATE
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


