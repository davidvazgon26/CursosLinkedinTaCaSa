import { useReducer } from "react";

const initialState = ({message:"Hi"});


function reducer(state, action){
    switch(action.type){
        case "yell":
            return{ message: `Hey!!! I Just said ${state.message}`};
        case "whisper":
            return{message:`Excuseme, Ijust said ${state.message}`};
        default: return;
    }

}

const StateAndDispatch=()=>{
const [state, dispatch] = useReducer(reducer, initialState);

return(<>
    <p>Message: {state.message}</p>

    <button onClick={()=>dispatch({type:"yell"})}>Yell</button>
    <button onClick={()=>dispatch({type:"whisper"})}>Whisper</button>
</>)

}



export default StateAndDispatch;