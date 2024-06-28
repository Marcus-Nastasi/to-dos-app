export default function About() {
   return(
      <div className="flex flex-col justify-center items-center overflow-x-hidden mb-10">

         <div className=" w-screen flex justify-center py-10">
            <img className="w-28 absolute top-2 left-3" src="./img/logo-3.png" alt="" />

            <h1 className="text-4xl mt-2 lg:text-5xl">About us</h1>
         </div>

         <div className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 text-lg lg:text-xl h-fit p-8 rounded-md border border-neutral-600 bg-neutral-300">
            <h2 className="text-center font-semibold text-xl lg:text-2xl mb-3">Goals</h2>
            <p>Welcome to our open-source software for to-dos/task management. Our goal is to simplify the management of tasks and allow users to focus on what truly matters. This application offers a robust and modern layout designed to maximize your user experience.</p>
            <ul className=" py-5 list-disc">
               <li><b className="font-medium">Create:</b> Easily create new tasks with a user-friendly interface.</li>
               <li><b className="font-medium">Update:</b> Modify your tasks as needed to reflect current progress.</li>
               <li><b className="font-medium">Delete:</b> Remove tasks that are no longer relevant.</li>
               <li><b className="font-medium">Manage:</b> Track the status of tasks, ensuring nothing falls through the cracks.</li>
            </ul>

            <p>The backend of this application is built with Java using SpringBoot and SpringSecurity, ensuring a secure and reliable environment. The frontend is developed with ReactJs, providing a dynamic and responsive user experience.</p>

            <h2 className="text-center font-semibold text-xl lg:text-2xl mt-5 lg:mt-8 mb-3">How to Use the App</h2>
            <ol className="list-decimal">
               <li className=" py-3"><b className=" font-medium">Create an Account: </b>Start by creating a new account in /login. Once your account is created, you will be redirected to the login page.</li>
               <li className=" py-3"><b className=" font-medium">Login:</b> Enter your credentials and login to the application. You will be taken to the home page.</li>
               <li  className=" py-3">
                  <b className="font-medium">Add a New Task: </b>

                  <ul className="relative left-5 list-disc pt-2">
                     <li>Click the 'plus' button or press Alt+T to create a new to-do.</li>
                     <li>Fill in the details of your task and save it.</li>
                  </ul>
               </li>
               <li className=" py-3"><b className=" font-medium">View Tasks: </b>On the home page, you will see a summary of all your to-dos.</li>
               <li className=" py-3">
                  <b className=" font-medium">Change Task Status: </b>

                  <ul className="relative left-5  list-disc pt-2">
                     <li>Each to-do card on the home page shows a summary of the task.</li>
                     <li>Click the three dots on the to-do card to change the status of the task between 'pending', 'in progress', and 'done'.</li>
                  </ul>
               </li>
               <li className=" py-3"><b className=" font-medium">View Task Details: </b>Click on the task summary to view detailed information about the task.</li>
               <li className=" py-3">
                  <b className=" font-medium">Edit or Delete Tasks: </b>

                  <ul className="relative left-5  list-disc pt-2">
                     <li>In the task details view, you can click the 'edit' button to update the task. This will take you to the update page.</li>
                     <li>Click the 'delete' button to remove the task permanently.</li>
                  </ul>
               </li>
               <li className=" py-3">
                  <b className=" font-medium">Manage Configurations and Account Settings:</b>

                  <ul className="relative left-5  list-disc pt-2">
                     <li>On the home page, click the vertical three dots in the top right corner.</li>
                     <li>From there, you can access the Configurations and Account pages to manage your application and account settings.</li>
                  </ul>
               </li>
            </ol>

         </div>

      </div>
   );
};


