import express from 'express';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json()); 

app.use(express.cookieParser());
mongoose.connect("mongodb+srv://habebabakr4:rkKSb8qZuAUfOjYk@qreebdb.eqrzmci.mongodb.net/?retryWrites=true&w=majority&appName=Qreebdb");

app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);


app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});

app.use((err,req,res,next) =>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode:statusCode,
        message:message
    });
})