import { useState, useEffect } from "react";



const APIConUseEffect = () =>{
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false)

    useEffect(()=>{
        fetch(`https://api.github.com/users`)
        .then(response=>response.json())
        .then(setData)
    },[flag])

    if(data.length>0){
        return(
          <>
          <p>***************************************************</p>
        <h3>Ejemplo de uso de API con useEffect y useState</h3>
            <button onClick={()=>setData([])}>Delete list</button>
              <ul>
                {data.map(user=>(
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
          </>
        )
    }
    
    return(
        <>
        <p>***************************************************</p>
        <h3>Ejemplo de uso de API con useEffect y useState</h3>
        <p>Not users</p>
        <button onClick={()=> setFlag(!flag)}>Load users</button>
        </>
    )
}



export default APIConUseEffect;