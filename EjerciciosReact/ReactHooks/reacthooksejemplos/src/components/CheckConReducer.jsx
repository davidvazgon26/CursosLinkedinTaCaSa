import { useReducer } from "react";


const CheckConReducer=()=>{
    const [checked, toggle] = useReducer((checked)=>!checked, false);

    return(
        <>
            <p>****************************</p>
            <h3>Check con reducer</h3>
            <input
                type="checkbox"
                onChange={toggle}/>
                <p>{checked?"check":"uncheck"}</p>
        </>
    )
}

export default CheckConReducer;