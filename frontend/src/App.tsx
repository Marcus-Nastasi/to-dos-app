import { useEffect, useState } from "react";
import Header from "./components/Generics/Header";
import InferiorMenu from "./components/Generics/InferiorMenu";
import StatusFilter from "./components/Generics/StatusFilter";
import TodoCard from "./components/Home/TodoCard";
import NewTodo from "./components/Todos/NewTodo";
// import User from "./components/Interface/User/User";
import Todo from "./components/Interface/Todos/Todo";

function App() {
   // const [ user, setUser ] = useState<User>();
   const [ todos, setTodos ] = useState<Array<Todo>>();
   const [ newTodo, setNewTodo ] = useState<string>('hidden');

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

            const receivedTodos: Array<Todo> = await req.json();

            setTodos(receivedTodos);

         } catch(e) {
            console.log(e);
         }
      };
      handleGetUser();

   }, []);

   const handleNewTodo = (): void => newTodo === 'hidden' ? setNewTodo('') : setNewTodo('hidden');

   return(
      <section className=" select-none">
         <Header title={'Hello user!'} />

         <div className=" pt-7">
            <StatusFilter />
         </div>

         <div className=" mb-28">

            <NewTodo show={newTodo} func={handleNewTodo} />

            {/* debbug date format on TodoCard (and todo "cart" name) */}
            {todos?.map((t: Todo) => <TodoCard title={t.title} priority={t.priority} date={`${t.due[2]}/${t.due[1]}/${t.due[0]}`} />)}

         </div>

         <div>
            <InferiorMenu func={handleNewTodo} />   
         </div>   
      </section>
   );
}

export default App;


