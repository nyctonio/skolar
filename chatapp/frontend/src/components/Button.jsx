import { useEffect, useState } from "react";

const Button  = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(count)
    },[count])

    
    return (
        <button onClick={()=>setCount(count+1)} className="btn btn-primary">Click me {count}</button>
    )
}

export default Button;