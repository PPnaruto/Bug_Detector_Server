const { User } = require("../Models/User.model");
const bcrypt = require('bcryptjs');

const SignUp = async(req,res) => {
    try{
        let {email,password} = req.body;
        
        if(!email || !password){
            return res.status(400).send({
                error:"Incomplete Data"
            })
        }

        let user = await User.findOne({email});
        if(user){
            return res.status(400).send({
                error:"This mail-id is already registered"
            })
        }
        password = bcrypt.hashSync(password);

        user = await User.create({
            email,password
            
        })
        
        return res.send({
            data: user,
            message:"User has been registered Succesfully"
        })
    }catch(err){
        console.error(err.message);
        res.status(400).send({
            message:"Something went wrong"
        })
    }
    
}

const SignIn = async(req,res) => {
    try{
        let {email,password} = req.body;
        let user = await User.findOne({
            email
        });
        console.log(user);

        if(!user){
            return res.status(400).send({
                message:"This mail-id is not registered"
            })
        }

        if(!bcrypt.compareSync(password,user.password)){
            return res.status(400).send({
                error:"Wrong Password"
            })
        }

        return res.send({
            data:user,
            message:"Login Successful"
        })

    }catch(err){
        console.error(err.message);
    }

}

module.exports = {
    SignUp,
    SignIn
}