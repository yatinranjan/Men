let express = require("express")

let app = express()

app.get("/", (req, res) => {
    res.send({status:1, message:"Home Page API"})
})
app.listen("8000")