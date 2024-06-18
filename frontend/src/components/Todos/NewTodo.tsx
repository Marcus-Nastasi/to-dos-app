import { useEffect, useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function NewTodo({ show, func }: any) {

   useEffect(() => {
      
      if(!document.cookie) window.open('/login', '_self');

   }, []);

   async function handleInsertTodo(e: any): Promise<void> {
      e.preventDefault();

      try {
         const token: string = document.cookie.split('Bearer=')[1];
         const url: string = 'http://localhost:8080/api/todos/new/';

         const [ title, client, description, link, due, priority ]: any = [
            document.getElementById('title'), 
            document.getElementById('client'), 
            document.getElementById('description'),
            document.getElementById('link'), 
            document.getElementById('due'), 
            document.getElementById('priority')
         ];

         const body: object = {
            // to-do: implement user id getter
            user_id: 1,
            client: client.value,
            title: title.value,
            description: description.value,
            link: link.value,
            due: due.value,
            priority: priority.value
         };
         
         console.log(token)
         console.log(body);

         const req: Response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(req.status != 201) console.log('error');

         const res: string = await req.text();

         console.log(res);

      } catch(e) {
         console.log(e);
      }

   }

   const [ closeButton, setCloseButton ] = useState<string>('#353535');

   const handleCloseBtnColorIn = (): void => setCloseButton('#838383');
   const handleCloseBtnColorOut = (): void => setCloseButton('#353535');
   
   return(
      <div className={`${show} w-screen min-h-screen max-h-fit fixed top-0 p-10 bg-slate-100`}>
         <div className=" h-screen flex flex-col items-center">
            <div className="w-full flex justify-center text-3xl pb-20">
               <h2 className=''>
                  New To-do
               </h2>

               <FaX
                  onMouseOver={handleCloseBtnColorIn}
                  onMouseLeave={handleCloseBtnColorOut}
                  color={closeButton}
                  onClick={func}
                  size={22}
                  className=' fixed right-10 hover:cursor-pointer'
               />
            </div>

            <div className=" w-full h-full">
               <form className="flex flex-col w-full h-full">

                  <label className=" text-2xl mb-1" htmlFor="title">Title:</label>
                  <input className=" mb-5 p-1" type="text" name="title" id="title" />

                  <label className="text-2xl mb-1" htmlFor="client">Client:</label>
                  <input className=" mb-5 p-1" type="text" name="client" id="client" />

                  <label className="text-2xl mb-1" htmlFor="description">Description:</label>
                  <input className=" mb-5 p-1" type="text" name="description" id="description" />

                  <label className="text-2xl mb-1" htmlFor="link">Link:</label>
                  <input className=" mb-5 p-1" type="text" name="link" id="link" />

                  <label className="text-2xl mb-1" htmlFor="due">Due:</label>
                  <input className=" mb-5 p-1" type="date" name="due" id="due" />

                  <label className="text-2xl mb-1" htmlFor="priority">Priority:</label>
                  <select className=" mb-10 p-3" name="priority" id="priority">
                     <option value="LOW">Low</option>
                     <option value="MEDIUM">Medium</option>
                     <option value="HIGH">High</option>
                  </select>

                  <button
                     onClick={handleInsertTodo} 
                     className=" px-5 py-1 text-lg bg-slate-300" 
                     type="submit">
                        Create
                  </button>

               </form>
            </div>
         </div>
      </div>
   );
};


