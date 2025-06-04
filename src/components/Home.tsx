import { useState } from "react";
function Home(){
 const[width,setwidth] = useState(1350);
 const [state , setState] = useState(false);
 const togglemenu = () => {
  setState(!state);
  !state ? setwidth(1140): setwidth(1350);
 };

 const claimReward= () => alert('Reward claimed');
  return (
      <nav >
        <div className='flex align-middle gap-2.5'>
          <h1 style={{width : width,transition:'left',transitionBehavior: 'ease'}}>Welcome to the Website</h1>
          <button className='w-8 h-8' onClick={(togglemenu)}>☰</button>
        </div>
        
       <div className={`side-menu ${state ? "open" : ""}`}>
        <h3>Daily Rewards</h3>
        <ul>
         <li>✔ Day 1 - 10 XP</li>
         <li>✔ Day 2 - 15 XP</li>
         <li>❗ Day 3 - Claim Now</li>
        </ul>
       <button onClick={claimReward}>Claim Reward</button><br></br>
      </div>
      </nav>
  );
}

export default Home;
