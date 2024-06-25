import { useEffect, useState } from "react";
import Todo from "./components/Interface/Todos/Todo";
import Update from "./components/Todos/Update";
import ErrorBox from "./components/Handler/ErrorBox";

export default function UpdateTodo() {
   const [ todo, setTodo ] = useState<Todo>();

   useEffect(() => {

      const getId = (): string => window.location.href.split('/')[5];

      async function getTodo(): Promise<void> {
         // const url: string = `http://3.219.123.52:8080/api/todos/get/${parseInt(getId())}/`;
         const url: string = `http://192.168.0.76:8080/api/todos/get/${parseInt(getId())}/`;
         const token: string = document.cookie.split('Bearer=')[1].split(';')[0];

         try {
            const request: Response = await fetch(url, {
               method: 'GET',
               headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
            });

            if(request.status != 200) console.log('error: status diferent than 200');

            const response: Todo = await request.json();

            setTodo(response);
         } catch(e) {
            console.log(e);
         }  
      };

      getTodo();

   }, []);

   return(
      <>{todo ? <Update todo={todo} /> : <ErrorBox message={'error: to-do not found'}/>}</>
   );
}


