import { useRef } from "react";


const FormConUseRef = () => {
    const sound = useRef();
    const color = useRef();

    const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`Sonido: ${soundVal} y el color hexa es: ${colorVal}`)
        sound.current.value="";
        color.current.value="";
    }

    return(<>
    <p>************************************</p>
    <h3>El uso de useRef con formularios</h3>
        <form onSubmit={submit}>
        <input
            type="text"
            placeholder="Sound..."
            ref={sound}
        />
        <input
            ref={color}
            type="color"
        />

        <button>Add</button>

        </form>
    </>)
}


export default FormConUseRef;