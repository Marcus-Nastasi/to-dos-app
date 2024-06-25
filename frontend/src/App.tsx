import { useEffect, useState } from "react";
import Header from "./components/Generics/Header";
import InferiorMenu from "./components/Generics/InferiorMenu";
import StatusFilter from "./components/Generics/StatusFilter";
import TodoCard from "./components/Home/TodoCard";
import NewTodo from "./components/Todos/NewTodo";
import User from "./components/Interface/User/User";
import Todo from "./components/Interface/Todos/Todo";
import { FaSpinner } from 'react-icons/fa6';

function App() {
   const [ user, setUser ] = useState<User>();
   const [ todos, setTodos ] = useState<Array<Todo>>();
   const [ newTodo, setNewTodo ] = useState<string>('hidden');
   const [ loading, setLoading ] = useState<string>();

   useEffect(() => {
      
      if(!document.cookie) window.open('/login', '_self');

      async function handleGetTodos(): Promise<void> {
        
         try {
            const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
            const uid: string = document.cookie.split('UID=')[1];
            // const url: string = `http://3.219.123.52:8080/api/todos/all/${parseInt(uid)}/`;
            const url: string = `http://127.0.0.1:8080/api/todos/all/${parseInt(uid)}/`;

            if(!token || !uid) {
               console.log('error');
               return
            }

            const req: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(req.status != 200) {
               console.log('error');
               window.open('/login', '_self');
               return
            }

            const receivedTodos: Array<Todo> = await req.json();

            setTodos(receivedTodos);

         } catch(e) {
            console.log(e);
         }
      };
      handleGetTodos();

      async function handleGetUser(): Promise<void> {

         try {
            const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
            const uid: string = document.cookie.split('UID=')[1];
            // const url: string = `http://3.219.123.52:8080/api/user/get/${parseInt(uid)}/`;
            const url: string = `http://127.0.0.1:8080/api/user/get/${parseInt(uid)}/`;

            if(!token || !uid) {
               console.log('error');
               return
            }

            const request: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(request.status != 200) {
               console.log('error');
               return;
            }

            const user: User = await request.json();

            setUser(user);
            setLoading('hidden');
         } catch(e) {   
            console.log(e);
         }
      }
      handleGetUser();

   }, []);

   const handleNewTodo = (): void => newTodo === 'hidden' ? setNewTodo('') : setNewTodo('hidden');

   return(
      <section className=" bg-slate-100 min-h-screen max-h-fit overflow-x-hidden">
         <div className={`${loading} flex justify-center items-center fixed top-0 w-screen h-screen bg-slate-50`}>
            <FaSpinner
               size={80}
               className={`loading_spinner`}
            />
         </div>

         <Header title={`Hello, ${user?.name.split(' ')[0]}`} />

         <div className=" pt-7">
            <StatusFilter />
         </div>

         <div className="pb-32">

            <NewTodo show={newTodo} func={handleNewTodo} />

            <div className="flex flex-col-reverse z-10">
               {todos?.map((t: Todo) => <TodoCard todo={t} id={t.id} title={t.title} priority={t.priority} date={`${t.due[2]}/${t.due[1]}/${t.due[0]}`} />)}
            </div>

         </div>

         <div>
            <InferiorMenu func={handleNewTodo} />   
         </div>   
      </section>
   );
}

export default App;


