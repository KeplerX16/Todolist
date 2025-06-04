import { useEffect, useState } from "react"

interface Props {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
  visdata: boolean[];
  setVisdata: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function Input({items , setItems , visdata , setVisdata}:Props){

  const [task,settask] = useState<string>("");

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if(task.trim() === '') return;
    setItems([...items,task]);
    setVisdata([...visdata,false]);
    settask('');
  }

  useEffect(()=>{
    try{
        localStorage.setItem('taskdata',JSON.stringify(items))
    } catch(error){
      console.error("Failed to store the items : ",error)
    }
  },[items])

  useEffect(()=>{
    try{
        localStorage.setItem('booldata',JSON.stringify(visdata))
    } catch(error){
      console.error("Failed to store the items : ",error)
    }
  },[visdata])

  return (
    <div className='py-3 w-auto'>
      <form onSubmit={handleAdd} className='bg-purple-400 p-0 rounded-2xl justify-center flex justify-items-center'>
        <label className='p-2.5 text-balance font-semibold text-4xs text-white'>
          Add task:
        <input 
         type = "text"
         value={task}
         onChange={(e) => settask(e.target.value)}
         className='border-2 rounded-xl ml-2 bg-white text-black'
        />
        </label>
       <button type="submit" className='text-4xs bg-pink-300 w-12 h-8 rounded-2xl py-1 mt-2'>Add</button>
      </form>
    </div>
  )
}

export default Input;