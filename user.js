const express =require('express');
const Router =express.Router();
const model =require('./model');
const User = model.getModel('user');
const utils = require ('utility');//为了密码加密
const _filter= {pwd:0,_v:0};

Router.get('/list',function(req,res){
   User.find({},function(err,doc){
      return res.json(doc);
   })
});

Router.post('/login',function(req,res){
   const {user,pwd}=req.body;
   User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
      if(!doc){
         return res.json({code:1,msg:'user name or password not exist'})
      }
      return res.json({code:0,data:doc})
   })
});

Router.post('/register',function(req,res){
   const {user,pwd,type} = req.body;
   User.findOne({user},function(err,doc){
      if(doc){
         return res.json({code:1,msg:"username exists"})
      }
      const userModel = new User({user,pwd:md5Pwd(pwd),type});
      userModel.save(function(e,d){
         if(e){
            return res.json({code:1,msg:"error"})
         }
         const {user,pwd,_id}=d;
         res.cookie('userid',d._id);
         return res.json({code:0,data:{user,pwd,_id}})
      });
   })
});

function md5Pwd (pwd){
   const salt = 'nero-love-zoey';
   return utils.md5(utils.md5(pwd+salt));
}

Router.get('/info',function(req,res){
   const {userid}= req.cookies;
   if(!userid){
      return res.json({code:1});
   }
   User.findOne({_id:userid},_filter,function(err,doc){
      if(err){
          return res.json({code:1,msg:"后端出错了"});
      }
      if(doc){
         return res.json({code:0,data:doc});
      }
   })
});

Router.post('/update',function(req,res){
    const userid= req.cookies.userid;
    if(!userid){
        return json.dumps({code:1});
    }
    const body =req.body;
    User.findByIdAndUpdate(userid,body,function(err,doc){
       const data = Object.assign({},{
          user:doc.user,
           type:doc.type,
       },body);
       return res.json({code:0,data});
    })
});

module.exports=Router;