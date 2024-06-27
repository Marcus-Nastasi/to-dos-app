import { useEffect, useState } from "react";
import { FaSpinner } from 'react-icons/fa6';
import Header from "./components/Generics/Header";
import InferiorMenu from "./components/Generics/InferiorMenu";
import StatusFilter from "./components/Generics/StatusFilter";
import TodoCard from "./components/Home/TodoCard";
import NewTodo from "./components/Todos/NewTodo";
import User from "./components/Interface/User/User";
import Todo from "./components/Interface/Todos/Todo";
import ErrorBox from "./components/Handler/ErrorBox";

function App() {
   const [ user, setUser ] = useState<User>();
   const [ todos, setTodos ] = useState<Array<Todo>>();
   const [ defTodos, setDefTodos ] = useState<boolean>(true);
   const [ doneTodos, setDoneTodos ] = useState<Array<Todo>>();
   const [ isDoneTodos, setIsDoneTodos ] = useState<boolean>(false);
   const [ progressTodos, setProgressTodos ] = useState<Array<Todo>>();
   const [ isProgressTodos, setIsProgressTodos ] = useState<boolean>(false);
   const [ pendingTodos, setPendingTodos ] = useState<Array<Todo>>();
   const [ isPendingTodos, setIsPendingTodos ] = useState<boolean>(false);
   const [ newTodo, setNewTodo ] = useState<string>('hidden');
   const [ loading, setLoading ] = useState<string>();
   const [ error, setError ] = useState<boolean>(false);
   const [ errorMessage, setErrorMessage ] = useState<string>();

   useEffect(() => {

      // to-do: implement 'about' page texts
      
      if(!document.cookie) window.open('/login', '_self');

      if(!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');

      async function handleGetTodos(): Promise<void> {
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
         const uid: string = document.cookie.split('UID=')[1];
         const url: string = `http://3.219.123.52:8080/api/todos/all/${parseInt(uid)}/`;

         if(!token || !uid) {
            handleError('no token or user');
            window.open('/login', '_self');
            return
         }

         try {
            const req: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(req.status != 200) {
               handleError('status diferent than 200');
               window.open('/login', '_self');
               return
            }

            const receivedTodos: Array<Todo> = await req.json();

            setTodos(receivedTodos);
         } catch(e: any) {
            handleError(e.message);
         }
      };
      handleGetTodos();

      async function handleGetUser(): Promise<void> {
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
         const uid: string = document.cookie.split('UID=')[1];
         const url: string = `http://3.219.123.52:8080/api/user/get/${parseInt(uid)}/`;

         if(!token || !uid) {
            handleError('no token or user');
            window.open('/login', '_self');
            return
         }

         try {
            const request: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(request.status != 200) {
               handleError('error: something went wrong, try again later');
               return;
            }

            const user: User = await request.json();

            setUser(user);
            setLoading('hidden');
         } catch(e: any) {   
            handleError(e.message);
         }
      }
      handleGetUser();

   }, []);

   async function getDone(): Promise<void> {
      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const uid: string = document.cookie.split('UID=')[1];
      const url: string = `http://3.219.123.52:8080/api/todos/done/${parseInt(uid)}/`;

      try {
         const request: Response = await fetch(url, {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         const doneTodos: Array<Todo> = await request.json();

         setDefTodos(false);
         setIsProgressTodos(false);
         setIsPendingTodos(false);
         setIsDoneTodos(true);
         setDoneTodos(doneTodos);
      } catch(e: any) {
         handleError(e.message);
      }
   };

   async function getProgress(): Promise<void> {
      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const uid: string = document.cookie.split('UID=')[1];
      const url: string = `http://3.219.123.52:8080/api/todos/progress/${parseInt(uid)}/`;
      
      try {
         const request: Response = await fetch(url, {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         const doneTodos: Array<Todo> = await request.json();

         setDefTodos(false);
         setIsDoneTodos(false);
         setIsProgressTodos(true);
         setIsPendingTodos(false);
         setProgressTodos(doneTodos);
      } catch(e: any) {
         handleError(e.message);
      }
   };
   
   async function getPending(): Promise<void> {
      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
      const uid: string = document.cookie.split('UID=')[1];
      const url: string = `http://3.219.123.52:8080/api/todos/pending/${parseInt(uid)}/`;
      
      try {
         const request: Response = await fetch(url, {
            method: 'GET',
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         const doneTodos: Array<Todo> = await request.json();

         setDefTodos(false);
         setIsDoneTodos(false);
         setIsProgressTodos(false);
         setIsPendingTodos(true);
         setPendingTodos(doneTodos);
      } catch(e: any) {
         handleError(e.message);
      }
   };

   function clearFilters(e: any): void {
      e.stopPropagation();
      setIsDoneTodos(false);
      setIsProgressTodos(false);
      setIsPendingTodos(false);
      setDefTodos(true);
   };

   const handleNewTodo = (): void => newTodo === 'hidden' ? setNewTodo('') : setNewTodo('hidden');
   document.addEventListener('keydown', (e: any) => {
      (e.key == 'Escape' && newTodo === '') ? setNewTodo('hidden') : '';
      (e.altKey && e.key === 't') ? setNewTodo('') : '';
   });

   const handleError = (e: string): void => {
      setErrorMessage(e);
      setError(true);
      setTimeout(() => setError(false), 4000);
      return
   };

   return(
      <section className={`min-h-screen max-h-fit overflow-x-hidden bg-slate-100`}>
         <div className={`${loading} flex justify-center items-center fixed top-0 w-screen h-screen bg-slate-50`}>
            <FaSpinner
               size={70}
               className={`loading_spinner`}
            />
         </div>

         {error ? <ErrorBox message={errorMessage} /> : ''}

         <Header title={`Hello, ${user?.name.split(' ')[0]}`} />

         <div className=" pt-7">
            <StatusFilter doneFilter={getDone} progressFilter={getProgress} pendingFilter={getPending} clear={clearFilters}  />
         </div>

         <div className="pb-32">

            <div className={`${newTodo} flex w-screen min-h-screen max-h-full fixed top-0 z-50`}>
               <NewTodo show={newTodo} func={handleNewTodo} />
            </div>

            <div className="flex flex-col-reverse h-fit z-10">
               {defTodos ? todos?.map((t: Todo) => <TodoCard todo={t} />): ''}
               {isDoneTodos ? doneTodos?.map((t: Todo) => <TodoCard todo={t} />): ''}
               {isProgressTodos ? progressTodos?.map((t: Todo) => <TodoCard todo={t} />): ''}
               {isPendingTodos ? pendingTodos?.map((t: Todo) => <TodoCard todo={t} />): ''}
            </div>

         </div>

         <div>
            <InferiorMenu func={handleNewTodo} />   
         </div>   
      </section>
   );
}

export default App;


