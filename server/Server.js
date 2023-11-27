const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes 

app.post("/adduser", (req, res) => {

    const username =req.body["username"]
    const password =req.body["password"]
    const phone_num = req.body["phone_num"]
    console.log("Username :",username);
    console.log("Password :",password);
    console.log("phoneNumber",phone_num)


    const insertSTMNT = `INSERT INTO accounts  (username,password)  VALUES ( '${username}' , '${password}')`;

    pool.query(insertSTMNT).then((response)=>{
        console.log("Data saved")
        console.log(response)
    })

    .catch((err)=>{
        console.log(err);
    })

    console.log(req.body);
    res.send("Response received:" + req.body);
    
})

app.listen(4000,()=>{
    console.log("Server on localhost:4000");
});