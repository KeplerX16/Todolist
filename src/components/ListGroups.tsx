import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelecteditem: (item: string) => void;
}
function ListGroups({items , heading , onSelecteditem}: Props) {
   
    const [selectedindex , setselectedindex ] = useState(-1);
  return (
  <>
  <h1>{heading}</h1>
    {items.length === 0 && <p>No item found</p>}
    <ul className='gap-2'>
    {items.map((item,index) => 
    <li 
    className = {selectedindex === index ? 'list-group-item active' : 'list-group-item'} 
    key = {item} 
    onClick={() => (setselectedindex(index),onSelecteditem(item))}>
      {item}
      </li>)
      }
    </ul>
  </>
  );
}

export default ListGroups;