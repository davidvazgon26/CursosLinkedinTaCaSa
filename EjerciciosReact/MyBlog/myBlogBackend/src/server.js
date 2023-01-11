import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import { db, connectToDb } from './db.js';


const credentials = JSON.parse(
    fs.readFileSync("./credentials.json")
);
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});
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

app.use(async(req,res,next)=>{
    const {authtoken}= req.headers;

    if (authtoken) {
        try {
            req.user = await admin.auth().verifyIdToken(authtoken);
        } catch (e) {
            return res.sendStatus(400);
        }
    }

    req.user = req.user||{};
    next();
})

app.get('/api/articles/:name', async (req,res) => {
    const {name} = req.params;
    const {uid} = req.user;
    /*
    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    // await client.connect();

    // const db = client.db('react-blog-db');

    */

    const article = await db.collection('articles').findOne({name});

    if (article) {
        const upvoteIds = article.upvoteIds || [];
        article.canUpvote = uid && !upvoteIds.includes(uid);
        res.json(article)
    } else {
        res.sendStatus(404).send('Articulo no encontrado');    
    }

});

app.use((req,res,next)=>{
    req.user?next():res.sendStatus(401);
})
 
app.put("/api/articles/:name/upvote", async (req, res) => {
  /** 
     const article = articlesInfo.find(a=>a.name === name);

     const client = new MongoClient('mongodb://127.0.0.1:27017');
     await client.connect();

     const db = client.db('react-blog-db');
    */

  const { name } = req.params;
  const { uid } = req.user;

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    const upvoteIds = article.upvoteIds || [];
    const canUpvote = uid && !upvoteIds.includes(uid);

    if (canUpvote) {
        await db.collection('articles').updateOne({ name }, {
            $inc: { upvotes: 1 },
            $push: { upvoteIds: uid },
        });
    }
    
    const updateArticle = await db.collection("articles").findOne({ name });
    // article.upvotes +=1;
    res.json(updateArticle);
  } else {
    res.send("El articulo indicado no estiste");
  }
});


app.post('/api/articles/:name/comments', async (req,res)=>{
    const {name} = req.params;
    const {text} = req.body;
    const {email} = req.user;

    // const article = articlesInfo.find(a=> a.name ===name);
    // const client = new MongoClient('mongodb://127.0.0.1:27017');
    // await client.connect();

    // const db = client.db('react-blog-db');
    await db.collection('articles').updateOne({name}, {$push:{comments: {postedBy:email,text}}});

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