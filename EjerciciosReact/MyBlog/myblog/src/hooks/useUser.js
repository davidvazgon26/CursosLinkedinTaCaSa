import { useState, useEffect } from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const useUser=()=>{
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user=>{
            setUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    },[]);

    return {user, isLoading}

}

export default useUser;

/**
 * Este código es una función de React Hook que se utiliza para obtener información del usuario autenticado en Firebase. 
 * Utiliza la función useState para almacenar el usuario y un indicador de carga. 
 * Luego, useEffect se utiliza para suscribirse a los cambios en el estado de autenticación. 
 * Cuando hay un cambio, se llama a la función onAuthStateChanged, que recibe la instancia de autenticación 
 * y una función de devolución de llamada que actualiza el estado del usuario y el indicador de carga. 
 * Finalmente, la función devuelve el usuario y el indicador de carga.
 */