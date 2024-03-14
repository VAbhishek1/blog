import express from "express";
const router= express.Router()
router.get('/new',(req, res)=>{
    res.render('articles/new.ejs');
})
export default router;