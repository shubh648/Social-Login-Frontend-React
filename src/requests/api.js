export default class Api{
    constructor(endPoint){
        console.log("endPoint", endPoint);
        
        this.endPoint=endPoint;
    }
    getQuery(param){
        let attributes = Object.keys(param);
        let length = attributes.length;
        
        return attributes.reduce((pv,cv,ind)=>{
            if(param[cv] === undefined) return pv;
            return `${pv}${cv}=${param[cv]}${ind !== length-1?'&':''}`
        },'');
    }
    get = async (param,queryParam={})=> {
        let query = this.getQuery(queryParam);

        try{
            const result = await fetch(`${this.endPoint}${param}${query?'?'+query:''}`);
            return await result.json();
        }catch(err){
            console.error(err);            
        }
    }

    post = async (param, body)=>{
        try{
            return await fetch(this.endPoint+param, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(body),
                mode:"cors", // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
              }).then(res => res.json())
        }catch(err){
            console.error(err);            
        }
    }
    put(){
        
    }
}