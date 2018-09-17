
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/imooc-chart';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
});

const models= {
    user:{
        'user':{'type':String,'require':true},
        'pwd':{'type':String,'require':true},
        'type':{'type':String,'require':true},
        //头像
        'avatar':{'type':String},
        'desc':{'type':String},
        //职位名
        'title':{'type':String},
        //如果是boss，还有两个字段
        'company':{'type':String},
        'money':{'type':String},

    },
    chat:{
    }
};

for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]));
}

module.exports ={
    getModel:function(name){
        return mongoose.model(name);
    }
};