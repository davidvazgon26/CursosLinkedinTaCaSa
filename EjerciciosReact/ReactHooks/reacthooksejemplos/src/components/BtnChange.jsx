import React, { useState } from "react";

//Lo haremos con una funcion normal para practicar todos los tipos.


function BtnChange () {

    //Crearemos un useState sin asignacion para ver en consola su funcionamiento.
    const result = useState();
    console.log("Esto es lo que contiene useState:");
    console.log(result);

    //Ahora crearemos un boton que modifique el parrafo
    const [cambiar, setCambiar] = useState("creado")

    return(<>
        <p>Este es el parrafo recien {cambiar}</p>
        <button onClick={()=>setCambiar("modificado")}>Modificar</button>
    </>
        
    )

}

export default BtnChange;