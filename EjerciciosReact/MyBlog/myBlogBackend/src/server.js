import express  from 'express';
import {db , connectToDb} from './db.js'

/**
let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
    comments:[],
},
{
    name: 'learn-node',
    upvotes: 0,
    comments:[],
},
{
    name: 'mongodb',
    upvotes: 0,
    comments:[],
}]

 */

const app = express();
app.use(express.json()); //middleware para convertir las respuestas a json.


app.get('/api/articles/:name', async (req,res) => {
    const {name} = req.params;
    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    // await client.connect();

    // const db = client.db('react-blog-db');

    const article = await db.collection('articles').findOne({name});

    if (article) {
        res.json(article)
    } else {
        res.sendStatus(404).send('Articulo no encontrado');    
    }

});
 
app.put('/api/articles/:name/upvote', async(req,res)=>{

    const {name} = req.params;
    // const article = articlesInfo.find(a=>a.name === name);

    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    // await client.connect();

    // const db = client.db('react-blog-db');
    await db.collection('articles').updateOne({name}, {$inc: {upvotes: 1}});
    const article = await db.collection('articles').findOne({name});


    if (article) {
        // article.upvotes +=1;
        res.json(article);
    } else {
        res.send('El articulo indicado no estiste');
    }

});


app.post('/api/articles/:name/comments', async (req,res)=>{
    const {name} = req.params;
    const {postedBy, text} = req.body;

    // const article = articlesInfo.find(a=> a.name ===name);
    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    // await client.connect();

    // const db = client.db('react-blog-db');
    await db.collection('articles').updateOne({name}, {$push:{comments: {postedBy,text}}});

    const article = await db.collection('articles').findOne({name});
   
    if(article){
        // article.comments.push({postedBy,text});
        res.json(article) //comentario no necesario
    }else{
        res.send('That article dosen\'t exist'); //Se dejo en ingles solo para ver el uso de los escapes de simbolos especiales. 
    }
})

/* 

rutas de mmuesta

app.get("/hola", (req,res)=>{
    res.send("Hola!");
});

app.post("/hola", (req,res)=>{
    console.log(req.body)
    res.send(`Hola ${req.body.name}!`);
});

app.get("/hola/:name/otroparametro/:lastName", (req,res)=>{  //recibiendo parametros en url
    const {name, lastName} = req.params; // destructurado
    console.log(req.params);
    res.send(`Hola ${name} ${lastName}, solo queria saludarte! `)
})


*/

connectToDb(()=>{
    console.log('Conexion exitosa a la BD')
    app.listen(8000,()=>{
        console.log("Servidor escuchando desde el puerto no 8000");
    });
})