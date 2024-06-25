import { useEffect, useState } from "react";
import Todo from "./components/Interface/Todos/Todo";
import Update from "./components/Todos/Update";

export default function UpdateTodo() {
   const [ todo, setTodo ] = useState<Todo>();

   useEffect(() => {

      function getId(): string {
         const url: string = window.location.href;
         const id: string = url.split('/')[5];
         return id;
      }

      async function getTodo(): Promise<void> {
         const url: string = `http://127.0.0.1:8080/api/todos/get/${parseInt(getId())}/`;
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];

         try {
            const request: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(request.status != 200) console.log('error');

            const response: Todo = await request.json();

            setTodo(response);

         } catch(e) {
            console.log(e)
         }  
      };

      getTodo();

   }, []);

   return(
      <>
         {
            todo ?
            <Update todo={todo} /> :
            ''
         }
      </>
   );
}


