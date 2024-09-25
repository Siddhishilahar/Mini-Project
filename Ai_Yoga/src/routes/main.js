const express = require("express");
const { route } = require('express/lib/application')

const Detail = require("../models/Detail")

const routes = express.Router()

routes.get("/", async (req, res)=>{

    const details = await Detail.findOne({"_id":"66af4db5b03bca58550b66b9"})
    //console.log(details)

    res.render("index",{
        details:details
    })

})

routes.get("/history", async (req,res)=>{
    const details = await Detail.findOne({"_id":"66af4db5b03bca58550b66b9"})
    res.render("history",{
        details:details
    })
})






module.exports = routes