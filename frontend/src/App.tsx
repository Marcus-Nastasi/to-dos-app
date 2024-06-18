import { useEffect, useState } from "react";
import Header from "./components/Generics/Header";
import InferiorMenu from "./components/Generics/InferiorMenu";
import StatusFilter from "./components/Generics/StatusFilter";
import TodoCart from "./components/Home/TodoCard";
import NewTodo from "./components/Todos/NewTodo";

function App() {
   const [ newTodo, setNewTodo ] = useState<string>('hidden');

   const handleNewTodo = (): void => newTodo === 'hidden' ? setNewTodo('') : setNewTodo('hidden');

   useEffect(() => {
      
      if(!document.cookie) window.open('/login', '_self');

   }, []);

   return(
      <section className=" select-none">
         <Header title={'Hello user!'} />

         <div className=" pt-7">
            <StatusFilter />
         </div>

         <div className=" mb-28">

            <NewTodo show={newTodo} func={handleNewTodo} />

            <TodoCart 
               title={'Title'} 
               priority={'Medium'} 
               date={'12 oct 2024'} 
            />
            
            <TodoCart title={'Title'} priority={'Low'} date={'30 oct 2024'} />
            <TodoCart title={'Title'} priority={'High'} date={'25 oct 2024'} />
            <TodoCart title={'Title'} priority={'Low'} date={'22 oct 2024'} />
            <TodoCart title={'Title'} priority={'High'} date={'15 oct 2024'} />

         </div>

         <div>
            <InferiorMenu func={handleNewTodo} />   
         </div>   
      </section>
   );
}

export default App;


