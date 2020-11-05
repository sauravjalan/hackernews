import React,{useState} from 'react';

export const App = () =>
{
    const[input,setinput]=useState[""]
}
const handlechange=(e)=>
{
    e.preventDeafault();
    setinput(e.target.value)
}
return(
    <div>
        <input type="text" placeholder="Search by title,job" onChange={handleChange}value="input"/>
    </div>
)