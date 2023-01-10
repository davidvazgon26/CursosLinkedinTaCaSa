import {MongoClient} from 'mongodb';

let db;

async function connectToDb(cb) {

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();

     db = client.db('react-blog-db');

    cb();
    
}

export {
    db,
    connectToDb
}

/**
El código anterior se encarga de conectar a una base de datos MongoDB y exportar la conexión para su uso posterior. Primero, se importa el módulo MongoClient desde 'mongodb'. Luego, se crea una variable global "db" para almacenar la conexión. A continuación, se define una función asíncrona "connectToDb" que recibe un callback como parámetro. Esta función crea un nuevo cliente MongoClient con la dirección de la base de datos y luego espera a que se establezca la conexión. Una vez que está conectado, se guarda el objeto db en la variable global y se ejecuta el callback. Finalmente, los objetos db y connectToDb son exportados para su uso posterior.
 */