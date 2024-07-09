import { useEffect, useState } from "react";
import { FaEllipsis } from 'react-icons/fa6';
import ViewTodo from "../Todos/ViewTodo";

export default function TodoCard({ todo }: any) {
   const [ priorColor, setPriorColor ] = useState<string>();
   const [ cardColor, setCardColor ] = useState<string>();
   const [ prior, setPrior ] = useState<string>();
   const [ titleCardColor, setTitleCardColor ] = useState<string>();
   const [ bigCard, setBigCard ] = useState<string>('hidden');
   const [ statusOptions, setStatusOptions ] = useState<string>('hidden');
   const [ shadowBoxes, setShadowBoxes ] = useState<object>();
   const [ statusBoxColor, setStatusBoxColor ] = useState<string>();
   const [ statusBoxHover, setStatusBoxHover ] = useState<string>();

   useEffect(() => {

      (localStorage.getItem('theme') === 'light') ? setShadowBoxes(shadowL) : setShadowBoxes(shadowD);
      (localStorage.getItem('theme') === 'light') ? setCardColor('bg-slate-50 hover:bg-gray-200') : setCardColor('bg-slate-900 hover:bg-gray-800');
      (localStorage.getItem('theme') === 'light') ? setTitleCardColor('text-slate-950') : setTitleCardColor('text-slate-300');
      (localStorage.getItem('theme') === 'light') ? setStatusBoxColor('bg-slate-100') : setStatusBoxColor('bg-slate-800');
      (localStorage.getItem('theme') === 'light') ? setStatusBoxHover('hover:bg-neutral-200') : setStatusBoxHover('hover:bg-neutral-500');

      if(todo.priority === 'LOW') {
         setPrior('Low');
         setPriorColor('bg-green-300');
      }

      if(todo.priority === 'MEDIUM') {
         setPrior('Medium');
         setPriorColor('bg-orange-300');
      }

      if(todo.priority === 'HIGH') {
         setPrior('High');
         setPriorColor('bg-red-300');
      }

   }, []);

   const handleStatusChange = async (e: any): Promise<void> => {
      const status = e.target.title;
      const url: string = `https://server.todos.rolemberg.net.br/api/todos/update/status/${todo.id}/`;
      const token: string = document.cookie.split('Bearer=')[1].split(';')[0];

      try {
         const response: Response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ status: status }),
            headers: new Headers({ 'content-type': 'application/json', 'Authorization': `Bearer ${token}` })
         });

         if(response.status != 201) console.log('error');

         window.open('/', '_self');
      } catch(e) {

      }
   };

   function handleBigCard(e: any): void {
      e.preventDefault();
      setBigCard('');
   };

   const handleBigCardShow = () => bigCard == 'hidden' ? setBigCard('') : setBigCard('hidden');

   const handleStatusOptions = (e: any) => {
      e.stopPropagation();
      statusOptions == 'hidden' ? setStatusOptions('') : setStatusOptions('hidden');
   };

   document.addEventListener('keydown', (e: any) => (e.key === 'Escape' && bigCard === '') ? setBigCard('hidden') : '');

   return(
      <>
         <div className={`${bigCard} fixed top-0 z-40 min-h-screen max-h-fit lg:left-0`}>

            <ViewTodo 
               func={handleBigCardShow} 
               todo={todo} 
            />
         
         </div>

         <div
            onClick={handleBigCard}
            onMouseLeave={() => setStatusOptions('hidden')}
            style={shadowBoxes}
            className={`todoCard ${cardColor} ${titleCardColor} m-5 p-4 z-0 rounded-3xl hover:cursor-pointer`}
         >

            <div className={`flex justify-between mb-4 lg:w-80`}>
               <div>
                  <p className={`text-2xl`}>

                     {todo.title}
                  
                  </p>
               </div>

               <div onClick={handleStatusOptions} className=" w-fit">
                  <p className="hover:cursor-pointer">
                  
                     <FaEllipsis
                        size={30} 
                     />
                  
                  </p>

                  <div className={`${statusOptions} absolute right-4 rounded-md text-lg border border-slate-300 ${statusBoxColor}`}>
                     <div>
                        <p 
                           onClick={handleStatusChange} 
                           title="DONE" 
                           className={`px-1 font-medium m-1 border-b border-slate-300 hover:rounded-md ${statusBoxHover}`}
                        >
                           done
                        </p>

                        <p 
                           onClick={handleStatusChange} 
                           title="PROGRESS" 
                           className={`px-1 font-medium m-1 border-b border-slate-300 hover:rounded-md ${statusBoxHover}`}
                        >
                           progress
                        </p>

                        <p 
                           onClick={handleStatusChange} 
                           title="PENDING" 
                           className={`px-1 font-medium m-1 hover:rounded-md ${statusBoxHover}`}
                        >
                           pending
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className=" mb-4">
               <div className="">
                  <p className={`${priorColor} text-slate-950 py-2 px-3 w-fit h-fit rounded-3xl`}>
                     {prior}
                  </p>
               </div>
            </div>

            <div className=" flex items-center">
               <img className=" m-0.5 mr-2 mb-1 w-3 h-3" src="./img/calendar.png" alt="" />

               <p>
               
                  {`${todo.due[2]}/${todo.due[1]}/${todo.due[0]}`}
               
               </p>
            </div>
         </div> 
      </>
   );
};

const shadowL: object = {
   boxShadow: '0 0 5px 0.2px lightgray'
}

const shadowD: object = {
   boxShadow: '0 0 6px 0.2px black'
}



