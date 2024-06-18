export default function NewTodo() {

   return(
      <div className=" w-screen min-h-screen max-h-fit fixed top-0 p-10 bg-slate-100">
         <div className=" h-screen flex flex-col items-center">
            <div className=" text-3xl pb-20">
               <h2>
                  New To-do
               </h2>
            </div>

            <div className=" w-full h-full">
               <form className="flex flex-col w-full h-full">

                  <label className=" text-2xl mb-1" htmlFor="title">Title:</label>
                  <input className=" mb-5 p-1" type="text" name="title" id="title" />

                  <label className="text-2xl mb-1" htmlFor="client">Client:</label>
                  <input className=" mb-5 p-1" type="text" name="client" id="client" />

                  <label className="text-2xl mb-1" htmlFor="description">Description:</label>
                  <input className=" mb-5 p-1" type="text" name="description" id="description" />

                  <label className="text-2xl mb-1" htmlFor="link">Link:</label>
                  <input className=" mb-5 p-1" type="text" name="link" id="link" />

                  <label className="text-2xl mb-1" htmlFor="due">Due:</label>
                  <input className=" mb-5 p-1" type="date" name="due" id="due" />

                  <label className="text-2xl mb-1" htmlFor="priority">Priority:</label>
                  <select name="priority" id="priority">
                     <option value="LOW">Low</option>
                     <option value="MEDIUM">Medium</option>
                     <option value="HIGH">High</option>
                  </select>

               </form>
            </div>
         </div>
      </div>
   );
};


