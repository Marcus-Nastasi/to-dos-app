import { useEffect, useState } from "react";
import Header from "./components/Generics/Header";
import InferiorMenu from "./components/Generics/InferiorMenu";
import StatusFilter from "./components/Generics/StatusFilter";
import TodoCart from "./components/Home/TodoCard";
import NewTodo from "./components/Todos/NewTodo";
// import User from "./components/Interface/User/User";
import Todo from "./components/Interface/Todos/Todo";

function App() {
   // const [ user, setUser ] = useState<User>();
   const [ todos, setTodos ] = useState<Array<Todo>>();
   const [ newTodo, setNewTodo ] = useState<string>('hidden');

   const handleNewTodo = (): void => newTodo === 'hidden' ? setNewTodo('') : setNewTodo('hidden');

   useEffect(() => {
      
      if(!document.cookie) window.open('/login', '_self');

      async function handleGetUser(): Promise<void> {
        
         try {
            const token: string = document.cookie.split('Bearer=')[1].split(';')[0];
            const uid: string = document.cookie.split('UID=')[1];
            const url: string = `http://localhost:8080/api/todos/all/${parseInt(uid)}/`;

            const req: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            const recievedTodos: Array<Todo> = await req.json();

            setTodos(recievedTodos);

            console.log(todos);

         } catch(e) {
            console.log(e);
         }
      };
      handleGetUser();

   }, []);

   return(
      <section className=" select-none">
         <Header title={'Hello user!'} />

         <div className=" pt-7">
            <StatusFilter />
         </div>

         <div className=" mb-28">

            <NewTodo show={newTodo} func={handleNewTodo} />

            {todos?.map((t: Todo) => <TodoCart title={t.title} priority={t.priority} date={t.due} />)}

            {/* <TodoCart 
               title={'Title'} 
               priority={'Medium'} 
               date={'12 oct 2024'} 
            /> */}

         </div>

         <div>
            <InferiorMenu func={handleNewTodo} />   
         </div>   
      </section>
   );
}

export default App;


