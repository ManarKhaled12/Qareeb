import { reset } from "nodemon";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/errror";
import bcryptjs from 'bcryptjs';
export const test =(req,res)=>{
    res.json({
        message: "api rout is working"

    });
};

export const updateUser =async(req,res,next)=>{
 
    if(req.user.id !== req.params.id ) return next(errorHandler(404,"you can only update your own account!"))
    try {
        if(req.body.password){
            req.body.password=bcryptjs.hashSync( req.body.password,10)
        }
        const updateUser=await User.findByIdAndUpdate(req.params.id ,{
            $set: {
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar
            }
        },
        {  new: true }
    )

    const {password, ...rest}=updateUser._doc
    res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};
// vite.config.js
export default {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Replace this with your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  };
  