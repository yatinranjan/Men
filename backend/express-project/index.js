let express = require("express")

let app = express()

app.get("/", (req, res) => {
    res.send({status:1, message:"Home Page API"})
})
app.get("/news", (req, res) => {
    res.send({status:1, message:"news Page API"})
})
app.listen("8000")
