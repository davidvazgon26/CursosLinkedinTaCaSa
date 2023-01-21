import { useState, useEffect } from "react"

function FirstUseEffect(){
    const [name, setName] = useState("Jan");
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
     document.title = `Celebrate ${name}`;  
     console.log(`Celebrate ${name}`);
    },[name] );

    useEffect(() => {
      console.log(`The user is: ${admin?"admin":"not admin"}.`);  
    },[admin] );

    return(
        <>
        <p>Congratulations {name}</p>
        <button onClick={()=>setName('Will')}>Change Winner</button>
        <p>{admin?"logged in":"Not logged"}</p>
        <button onClick={()=> setAdmin(!admin)}>{admin?"Log on":"Log in"}</button>
        </>

    )
}

export default FirstUseEffect;