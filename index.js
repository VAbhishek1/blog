console.log("hello");
import express from "express";
import articleRouter from './routes/articles.js'
const app=express();
app.use('/articles',articleRouter)
app.get("/",(req,res)=>{
    const art=[{
        title: 'Test Article1',
        createdAt: new Date(),
        description: 'Test description1'
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description: 'Test description2'
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description: 'Test description2'
    },
]
   res.render("articles/index.ejs",{ articles: art});
})
app.listen(3000,()=>{
    console.log("aye aye captain");
})
