const express = require('express');
const mongoose = require('mongoose');
const userRouter=require('./user');
// 链接mongo 并且使用imooc这个集合



const app = express();
app.use('/user',userRouter);


app.listen(9093,function(){
	console.log('Node app start at port 9093')
});



