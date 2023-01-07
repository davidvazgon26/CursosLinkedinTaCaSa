import express  from 'express';

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

const app = express();
app.use(express.json()); //middleware para convertir las respuestas a json.

app.put('/api/articles/:name/upvote',(req,res)=>{

    const {name} = req.params;
    const article = articlesInfo.find(a=>a.name === name);

    if (article) {
        article.upvotes +=1;
        res.send(`El articulo ahora tiene ${article.upvotes} votos.`);
    } else {
        res.send('El articulo indicado no estiste');
    }

});


app.post('/api/articles/:name/comments',(req,res)=>{
    const {name} = req.params;
    const {postedBy, text} = req.body;

    const article = articlesInfo.find(a=> a.name ===name);

    if(article){
        article.comments.push({postedBy,text});
        res.send(article.comments)
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

app.listen(8000,()=>{
    console.log("Servidor escuchando desde el puerto no 8000");
});