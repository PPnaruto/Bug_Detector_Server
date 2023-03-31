const express = require('express');
const { connection } = require('./Database/db');
const {userRouter} = require('./Router/User');
const cors = require('cors');
const { bugRouter } = require('./Router/Bug');
const app = express();

app.use(cors());
app.use(express.json());



const PORT = process.argv[2] || 8000;

app.use('/users',userRouter);
app.use('/bug',bugRouter);

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