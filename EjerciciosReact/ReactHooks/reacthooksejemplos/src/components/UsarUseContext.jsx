import { useTrees } from "..";  //Es el nombre que elegimos para la variable

//La primera parte del uso del useContext esta en index.js

const UsarUseCOntext = () =>{
    const {trees} = useTrees();

    return(<>
        <p>***********************************</p>
        <h3>Uso de useContext</h3>
        <ul>
            {trees.map(tree => (<li key={tree.id}>{tree.type}</li>))}
        </ul>

    </>)
}


export default UsarUseCOntext;