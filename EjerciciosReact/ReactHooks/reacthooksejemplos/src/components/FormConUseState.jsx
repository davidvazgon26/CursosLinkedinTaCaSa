import { useState } from "react";


const FormConUseState = () => {
    const [sound, setSound] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`Sonido: ${sound} y el color hexa es: ${color}`)
        setSound("");
        setColor("#000000");
    }

    return(<>
    <p>************************************</p>
    <h3>El uso de useState con formularios</h3>
        <form onSubmit={submit}>
        <input
            type="text"
            value={sound}
            placeholder="Sound..."
            onChange={(e)=>setSound(e.target.value)}
        />
        <input
            value={color}
            type="color"
            onChange={(e)=>setColor(e.target.value)}
        />

        <button>Add</button>

        </form>
    </>)
}


export default FormConUseState;