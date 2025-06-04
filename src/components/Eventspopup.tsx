
function Eventspopup({onClose} : {onClose (): void}) {

   return (
        <>
        <div  onClick={onClose}></div>
            <div className= {"event-open"}>
            <nav style={{display : "flex", justifyContent: "center", alignItems: "center"}}>
             <h3 style={{width: 900,height: 32}}>Events</h3>
             <button onClick={onClose} style={{width: 32, height: 32}} >X</button>
            </nav>
                </div>
        </>)
}

export default Eventspopup;