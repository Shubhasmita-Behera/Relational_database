const {Pool} =require('pg');
const pool = new Pool({
    user: "postgres",
    password: "Shubha@2018",
    host: "localhost",
    port: 5432,
    database:"yt_login_system"
})


// const createTblQuery =`CREATE TABLE accounts(
//     user_id serial PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) UNIQUE NOT NULL
// );`  //name of the table is accounts and colums are user_id, username, password


// pool.query("CREATE DATABASE yt_login_system;").then((response)=>{
//     console.log("Database Created")
//     console.log(response)
// })

// pool.query(createTblQuery).then((response)=>{
//     console.log("Table Created")
//     console.log(response)
// })

// .catch((err)=>{
//     console.log(err);
// });

module.exports = pool;