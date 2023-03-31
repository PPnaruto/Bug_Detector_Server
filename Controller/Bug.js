const { Bug } = require("../Models/Bug.model") ;

const getAllBugs = async(req,res) =>{
    try{
        const data = await Bug.find();

        return res.send({
            data:data
        })

    }catch(err){
        console.error(err.message);
        return res.status(400).send({
            message:"Something went wrong"
        })
    }
}

const addBug = async(req,res) =>{
    try{
        const data = req.body;
        const bug = await Bug.create(data);

        return res.send({
            message:"Bug added successfully"
        })
    }catch(err){
        console.error(err.message);
        return res.status(400).send({
            message:"Something went wrong"
        })
    }
    


}

module.exports = {
    getAllBugs,
    addBug
}