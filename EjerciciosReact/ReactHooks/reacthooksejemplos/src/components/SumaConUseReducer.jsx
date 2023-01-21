import { useReducer } from "react"


const SumaConUseReducer = ()=> {

    const [suma, setSuma] = useReducer((number, newNumber) => number+newNumber,0);

return(
    <>
        <p>***********************************************</p>
        <h3>Uso de useRecuder</h3>
        <p>Contador en: {suma}</p>
        <button onClick={()=>setSuma(1)}>Sumar</button>
    </>
)

}

export default SumaConUseReducer;