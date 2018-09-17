import axios from 'axios';
import {getRedirectPath} from '../util';

const REGISTER_SUCCESS ='REGISTER_SUCCESS';
const ERROR_MSG='ERROR_MSG';
const LOGIN_SUCCESS='LOGIN_SUCCESS';
const LOAD_DATA ="LOAD_DATA";

//reducer

const initState={
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:'',
};



export function user(state=initState,action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state,isAuth:true,...action.data,redirectTo:getRedirectPath(action.data),msg:''};
        case LOGIN_SUCCESS:
            return {...state,isAuth:true,...action.data,redirectTo:getRedirectPath(action.data),msg:''};
            case ERROR_MSG:
                return {...state,isAuth:false,msg:action.msg};
        case LOAD_DATA:
            return {...state,...action.data};
        default:
            return state
    }
}

function errorMsg(msg){
    return {msg, type:ERROR_MSG, }
}

function registerSuccess(data){
    return {type:REGISTER_SUCCESS,data}
}
function loginSuccess(data){
    return {type:LOGIN_SUCCESS,data}
}

export function loadData(userinfo){
    console.log(userinfo);
    return {type:LOAD_DATA,data:userinfo};
}

export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg('Must enter username and password')
    }
    return (dispatch)=>{
        axios.post('/user/login',{user,pwd}).then(
            (res)=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(loginSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }

            }
        )
    }
}

export function register({type,user,pwd,repeatpwd}){
    if(!type||!user||!pwd||!repeatpwd){
        return errorMsg('Must enter username and password')
    }
    if(pwd!==repeatpwd){
        return errorMsg('password enter incorrectly')
    }
    return (dispatch)=>{
        axios.post('/user/register',{user,pwd,type}).then(
            (res)=>{
                if(res.status===200&&res.data.code===0){
                    dispatch(registerSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }

            }
        )
    }
}