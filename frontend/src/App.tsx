import Header from "./components/Generics/Header";
import StatusFilter from "./components/Generics/StatusFilter";
import TodoCart from "./components/Home/TodoCard";

function App() {

   return(
      <section className=" select-none">
         <Header title={'Hello user!'} />

         <div className=" pt-7">
            <StatusFilter />
         </div>

         <div className=" mb-10">
            <TodoCart title={'Title'} priority={'Medium'} date={'12 oct 2024'} />
            <TodoCart title={'Title'} priority={'Low'} date={'30 oct 2024'} />
            <TodoCart title={'Title'} priority={'High'} date={'25 oct 2024'} />
            <TodoCart title={'Title'} priority={'Low'} date={'22 oct 2024'} />
            <TodoCart title={'Title'} priority={'High'} date={'15 oct 2024'} />
         </div>         
      </section>
   );
}

export default App;


