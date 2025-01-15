let express = require("express")
const dbConnection = require("./dbConnection")
const {ObjectId} = require("mongodb")
let app=express()

app.use(express.json())

app.get("/student-read",async(req,res)=>{
    let myDB= await dbConnection();
    let studentCollection=myDB.collection("students")
    let data= await studentCollection.find().toArray()
    let resObj={
        status:1,
        msg:"Student list",
        data
    }
    res.send(resObj)
})
app.post("/student-insert",async(req,res)=>{
    let myDB= await dbConnection();
    let studentCollection=myDB.collection("students")
    res.send("Student insert API")

    // let obj={
    //     sName:req.body.sName,
    //     sEmail:req.body.sEmail,
    // }
    // console.log(obj)

    let {sName,sEmail}=req.body;
    let obj={sName,sEmail}
    console.log(obj)

    let insertRes= await studentCollection.insertOne(obj)
    let resObj={
        status:1,
        message:"Student insert",
        insertRes
    }
    res.send(resObj)
    
    })
    // delete operation
    app.delete("/student-delete/:id",async(req,res)=>{
        let {id}=req.params; //{id:3}
        let myDB= await dbConnection();
        let studentCollection=myDB.collection("students")
        let deleteRes= await studentCollection.deleteOne({_id:new ObjectId(id)})
        let resObj={
            status:1,
            message:"Student delete",
            deleteRes
        }
        res.send(resObj)
    })

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})