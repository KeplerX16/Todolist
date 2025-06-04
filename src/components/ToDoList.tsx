
interface Props {
  items: string[];
  visdata: boolean[];
  setVisdata: React.Dispatch<React.SetStateAction<boolean[]>>;
}

function ToDoList({items , visdata , setVisdata} : Props) {


  const handleClick = (index: number) => {

    const updat = [...visdata]
    updat[index] = true;
    setVisdata(updat);  
  };

  return (
    
      <div className='flex-col justify-center '>
        {
        !visdata.every(v => v === true) && <h2 className='w-auto text-2xl bg-purple-400 rounded-2xl p-2.5 justify-center flex text-white font-semibold'>|: - Pending tasks - :|</h2>
        }
        <ul>
         {
          items.map((item, index) => (
            !visdata[index] && 
            <div className='flex gap-2 mt-2 mb-2 bg-purple-200 rounded-xl px-3' key={index}>
              <li key={item} className='text-xl '>
                {item}
              </li><button key={index} className='text-4xs bg-purple-300 font-semibold rounded-xl p-1 border-1 border-purple-400' onClick={() => handleClick(index)}>Close</button>
            </div>
          ))
          }
        </ul>
        {visdata.every(v => v === true) && <h2 className='m-4 text-2xl font-semibold mt-2'>All tasks are Completed</h2>}
        <h2 className='w-auto text-2xl bg-purple-400 rounded-2xl p-2.5 justify-center flex text-white font-semibold'>|: - Completed tasks - :|</h2>
        <ul>
        {items.map((item, index) => (
            visdata[index] && 
            <li key={item} className='text-xl m-4 text-gray-400'>
              {item}
            </li>
            
          ))}
        </ul>
      </div>

  );
}

export default ToDoList;
