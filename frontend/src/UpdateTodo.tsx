import { useEffect, useState } from "react";
import Todo from "./components/Interface/Todos/Todo";
import Update from "./components/Todos/Update";
import ErrorBox from "./components/Handler/ErrorBox";
import { FaSpinner } from "react-icons/fa6";

export default function UpdateTodo() {
   const [ todo, setTodo ] = useState<Todo>();
   const [ loading, setLoading ] = useState<string>();
   const [ error, setError ] = useState<boolean>(false);
   const [ bgCard, setBgCard ] = useState<string>();
   const [ textThemeColor, setTextThemeColor ] = useState<string>();

   useEffect(() => {

      const getId = (): string => window.location.href.split('/')[5];

      async function getTodo(): Promise<void> {
         const url: string = `https://server.todos.rolemberg.net.br/api/todos/get/${parseInt(getId())}/`;
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];

         try {
            const request: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(request.status != 200) {
               setError(true);
               return
            }

            const response: Todo = await request.json();

            setTodo(response);
            setLoading('hidden');
         } catch(e) {
            console.log(e);
         }  
      };
      getTodo();

      (localStorage.getItem('theme') === 'light') ? setBgCard('bg-white') : setBgCard('bg-slate-800');
      (localStorage.getItem('theme') === 'light') ? setTextThemeColor('') : setTextThemeColor('text-slate-50');

   }, []);

   return(
      <>
         <div className={`${loading} flex justify-center items-center fixed top-0 w-screen h-screen z-50 ${bgCard}`}>

            <FaSpinner
               size={50}
               className={`loading_spinner`}
            />

         </div>

         {todo ? <Update todo={todo} /> : '' }

         {error ? <ErrorBox message={'error'}/> : ''}
      </>
   );
}


