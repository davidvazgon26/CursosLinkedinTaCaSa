import { useState } from "react";


// extrayendo la funcionalidad de extraer los datos de los campos
function useInput(initialValue){
    const [value, setValue] = useState(initialValue);

    return[
        {
            value,
            onChange: (e)=> setValue(e.target.value)
        },
        ()=> setValue(initialValue)
    ];
}

const FormConHookPersonalizado = () =>{
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit= (e) =>{
        e.preventDefault();
        alert(`${titleProps.value} y ${colorProps.value}`);
        resetTitle();
        resetColor();
    }

    return(<>
        <p>*******************************************</p>
        <h3>FormConHookPersonalizado</h3>
        <form onSubmit={submit}>
            <input
            {...titleProps}
            type="text"
            placeholder="Sound..."
            />
            <input
                {...colorProps}
                type="color"
            />
            <button>Add</button>
        </form>

    </>)

}


export default FormConHookPersonalizado;