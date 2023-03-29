const express = require('express');
const { connection } = require('./Database/db');
const {userRouter} = require('./Router/User');

const app = express();

const PORT = process.argv[2] || 8000;

app.use('/users',userRouter);
app.get('/',(req,res)=>{
    res.send("welcome");
})

app.listen(PORT,()=>{
    try{
        connection();
        console.log(`server is listening on http://localhost:${PORT}`);
    }catch(err){
        console.error(err.message);
    }
    
})