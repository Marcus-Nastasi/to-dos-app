import { useEffect, useState } from "react";
import ErrorBox from "../Handler/ErrorBox";

export default function Update({ todo }: any) {
   const [ title, setTitle ] = useState<string>(todo.title);
   const [ client, setClient ] = useState<string>(todo.client);
   const [ description, setDescription ] = useState<string>(todo.description);
   const [ link, setLink ] = useState<string>(todo.link);
   const [ priority, setPriority ] = useState<string>(todo.priority);
   const [ error, setError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();
   const [ bgTheme, setBgTheme ] = useState<string>();
   const [ textThemeColor, setTextThemeColor ] = useState<string>();

   useEffect(() => {

      (localStorage.getItem('theme') === 'light') ? setBgTheme('bg-white') : setBgTheme('bg-slate-900');
      (localStorage.getItem('theme') === 'light') ? setTextThemeColor('') : setTextThemeColor('text-slate-50');

   }, []);

   async function handleUpdateTodo(e: any): Promise<void> {
      e.preventDefault();

      const url: string = `https://server.todos.rolemberg.net.br/api/todos/update/${parseInt(todo.id)}/`;
      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const [ t, c, d, l, due, p ]: any = [ document.getElementById('title'),  document.getElementById('client'),  document.getElementById('description'),  document.getElementById('link'),  document.getElementById('due'),  document.getElementById('priority') ];

      if(!due.value) {
         handleError('error: must be a due date');
         return
      }

      try {
         const request: Response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ title: t.value, client: c.value, description: d.value, link: l.value, due: due.value, priority: p.value }),
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(request.status != 201) {
            handleError('error: not updated');
            return
         };

         window.open('/', '_self');
      } catch(e) {
         handleError('error: not updated');
      }  
   };

   const handleError = (e: string): void => {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 4000);
      return
   };

   const handleTitle = () => {
      const t: any = document.getElementById('title');
      setTitle(t.value);
   };

   const handleClient = () => {
      const t: any = document.getElementById('client');
      setClient(t.value);
   };

   const handleDescription = () => {
      const t: any = document.getElementById('description');
      setDescription(t.value);
   };

   const handleLink = () => {
      const t: any = document.getElementById('link');
      setLink(t.value);
   };

   const handlePriority = () => {
      const t: any = document.getElementById('priority');
      setPriority(t.value);
   };

   return(
      <div className={`p-10 min-h-screen max-h-fit lg:flex lg:flex-col lg:items-center ${textThemeColor} ${bgTheme}`}>
         {error ? <ErrorBox message={errorMessage} /> : ''}

         <h1 className=" text-center text-3xl font-medium mb-10">Update</h1>

         <form className="flex flex-col w-full h-full lg:w-9/12 xl:w-7/12 2xl:w-5/12">

            <label className=" text-2xl mb-3" htmlFor="title">Title:</label>
            <input onChange={handleTitle} className={`${bgTheme} mb-5 p-1.5 transition-all ease-in-out delay-0 border-b-2 border-orange-400 focus:outline-none focus: focus:border-b-4 focus:border-orange-700`} value={title} type="text" name="title" id="title" />

            <label className="text-2xl mb-3" htmlFor="client">Client:</label>
            <input onChange={handleClient} className={`${bgTheme} mb-5 p-1.5 transition-all ease-in-out delay-0 border-b-2 border-orange-400 focus:outline-none focus:border-b-4 focus:border-orange-700`} value={client} type="text" name="client" id="client" />

            <label className="text-2xl mb-3" htmlFor="description">Description:</label>
            <input onChange={handleDescription} className={`${bgTheme} mb-5 p-1.5 transition-all ease-in-out delay-0 border-b-2 border-orange-400 focus:outline-none focus:border-b-4 focus:border-orange-700`} value={description} type="text" name="description" id="description" />

            <label className="text-2xl mb-3" htmlFor="link">Link:</label>
            <input onChange={handleLink} className={`${bgTheme} mb-5 p-1.5 transition-all ease-in-out delay-0 border-b-2 border-orange-400 focus:outline-none focus:border-b-4 focus:border-orange-700`} value={link} type="text" name="link" id="link" />

            <label className="text-2xl mb-3" htmlFor="due">Due:</label>
            <input className={`${bgTheme} mb-5 p-1.5 transition-all ease-in-out delay-0 border-b-2 border-orange-400 focus:outline-none focus:border-b-4 focus:border-orange-700`} type="date" name="due" id="due" />

            <label className="text-2xl mb-3" htmlFor="priority">Priority:</label>
            <select onChange={handlePriority} className={`${bgTheme} mb-10 p-3 transition-all ease-in-out delay-0 border-b-2 border-orange-400 focus:outline-none focus:border-b-4 focus:border-orange-700`} value={priority} name="priority" id="priority">
               <option value="LOW">Low</option>
               <option value="MEDIUM">Medium</option>
               <option value="HIGH">High</option>
            </select>

            <button
               onClick={handleUpdateTodo}
               style={localStorage.getItem('theme') === 'light' ? shadow : shadowOnDark}
               className="w-fit self-center px-5 py-1 text-lg font-semibold rounded-md text-slate-100 border border-blue-600 bg-blue-700 hover:bg-blue-500" 
               type="submit">
                  Update
            </button>

         </form>
      </div>
   );
};

const shadow: object = {
   boxShadow: '0 0 10px 0.6px lightgray'
}

const shadowOnDark: object = {
   boxShadow: '0 0 10px 0.6px black'
}

