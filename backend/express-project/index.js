let express = require("express")
require("dotenv").config()
const { checkToken } = require("./checkTokenMiddleware")

let app = express()
console.log(process.env.MYToken)
app.use(express.json())
// let myToken="12345"

// let checkToken = (req, res, next) => {
//     console.log(req.query.token)
//     if(req.query.token == "" || req.body.token == undefined) {
//         return res.send({status:1, message:"Please Fill the Token"})
//     }
//     if(req.query.token != myToken) {
//         return res.send({status:1, message:"Please Fill the Correct Token"})
//     }
//     // console.log("Welcome")
//     next()
// }
// app.use(checkToken) // middleware

// const myToken = "12345";

// const checkToken = (req, res, next) => {
//     const token = req.query.token;
//     console.log(token);

//     if (!token) {
//         return res.send({status: 1, message: "Token is missing. Please provide a valid token."});
//     }
//     if (token !== myToken) {
//         return res.send({status: 1, message: "Invalid token. Please provide the correct token."});
//     }

//     next();
// };

// app.use(checkToken); // middleware

// const myPassword = "12345";

// const checkPassword = (req, res, next) => {
//     const pass = req.query.pass;
//     console.log(pass);

//     if (!pass) {
//         return res.send({status: 1, message: "Password is missing. Please provide a valid Password."});
//     }
//     if (pass !== myPassword) {
//         return res.send({status: 1, message: "Invalid Password. Please provide the correct Password."});
//     }

//     next();
// };

// app.use(checkPassword); // middleware



app.get("/", (req, res) => {
    res.send({status:1, message:"Home Page API"})
})
app.get("/news",checkToken, (req, res) => {
    res.send({status:1, message:"news Page API"})
})

app.get("/news/:id", (req, res) => {
    let currentId = req.params.id
    res.send("News Details API"+currentId)
})

app.get("/products", (req, res) => {
    res.send({status:1, message:"Product Page API"})
})
app.post("/login", (req, res) => { 
    console.log(req.body) 
    res.status(200).json({status:1, message:"Login API", bodyData:req.body, queryData:req.query})
    // res.send({status:1, message:"Login API", bodyData:req.body, queryData:req.query})
})
// app.listen("8000")
app.listen(process.env.PORT || 5000)
