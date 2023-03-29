const { User } = require("../Models/User.model");

const SignUp = async(req,res) => {
    try{
        const data = req.body;
        const user =  await User.create(data);

        res.send({
            data: user,
            message:"User has been registered Succesfully"
        })
    }catch(err){
        console.error(err.messsage);
        res.status(400).send({
            message:"Something went wrong"
        })
    }
    
}

const SignIn = async(req,res) => {
    try{
        const data = req.body;
        const email = data.email;
        const user = await User.find({
            email
        });
        
        if(user){
            res.send({
                message:"Login Successful"
            })
        }else{
            res.status(400).send({
                message:"This mail-id is not registered"
            })
        }
    }catch(err){
        console.error(err.message);
    }

}

module.exports = {
    SignUp,
    SignIn
}