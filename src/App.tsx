import { useState } from "react";
import './index.css';
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

function App() {

    const [items, setItems] = useState<string[]>(() => {
      try {
       const data = localStorage.getItem("taskdata");
       return data ? JSON.parse(data) : ["Visit the Website"];
      } catch (e) {
       console.error("Error parsing taskdata :", e);
       return ["Visit the Website"];
     }
    });

    const [visdata, setVisdata] = useState<boolean[]>(() => {
      try {
       const data = localStorage.getItem("booldata");
       return data ? JSON.parse(data) : [false];
      } catch (e) {
       console.error("Error parsing booldata :", e);
       return [false];
      }
    });


  return (
    <>
      <div className='bg-purple-100 max-h-screen max-w-screen w-screen h-screen'>
        <h1 className='text-2xl bg-purple-300 w-screen p-4 justify-center font-bold flex'>To-do List</h1>
        <div className='flex-col gap-2 p-10'>
        <Input setItems={setItems} items={items} setVisdata={setVisdata} visdata={visdata} />
        <ToDoList items={items} visdata={visdata} setVisdata={setVisdata}/>
        </div>
      </div>
    </>
  );
}

export default App;
