import React,{useEffect, useState} from 'react';//import react and usestate hook from react library
function UseStatehook(){ //create the functional component
    
//count is my statevariable
const[count,setCount]=useState(0);

useEffect(()=>{
    // update docunent title using brower appi
    document.title=`you clicked ${count}times`
    console.log(count)

},[])

return(
    <div>
    <p>You clicked {count} times</p>
    <button onClick={()=>setCount(count+1)}>Click me</button>


    </div>
)
    
}
export default UseStatehook