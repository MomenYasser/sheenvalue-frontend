export default function Observable(Class){
    new Proxy(Class,{
        set:(target,key,value)=>{
            if(value!==target[key]){
                target[key]=value;
                Class.render();
            }
            if(Class.render.toString().indexOf(key)!==-1){
                target[key]=value;
                Class.render();
            }
            
        }
    })

}