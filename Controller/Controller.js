const { User } = require("../Models/User.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRETE_KEY = process.env.JWT_SECRETE_KEY;

const generateToken = (user)=>{
    let {_id,email,name} = user;
    return jwt.sign({
        _id,email,name
    },JWT_SECRETE_KEY);
}

const SignUp = async(req,res) => {
    try{
        let {email,password,name} = req.body;
        
        if(!name || !email || !password){
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
            name,email,password
            
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

const Login = async(req,res) => {
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

        const token = generateToken(user);
        console.log(token);

        const {_id,name} = user;

        return res.send({
            data:{
                token,
                user:{_id,name}
            },
            message:"Login Successful"
        })

    }catch(err){
        console.error(err.message);
    }

}

module.exports = {
    SignUp,
    Login
}