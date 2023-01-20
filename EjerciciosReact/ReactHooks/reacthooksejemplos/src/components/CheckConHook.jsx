import { useState } from "react";

//ahora lo haremos con arrow function

const CheckConHook = () => {
    const [checked, setChecked] = useState(false);

    return(
        <>
        <h3>Checkbox</h3>
            <input 
                type="checkbox"
                onChange={()=>setChecked(!checked)}
            />
            <p>El input es {checked?"checked":"unchecked"}</p>

        </>
    )
}

export default CheckConHook;