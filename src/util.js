export function getRedirectPath ({type,avater}){
    let url = (type==='boss')? '/boss' : '/genius';
    if(!avater){
        return url +='info';
    }
    return url;
}