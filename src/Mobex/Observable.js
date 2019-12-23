export default function Observ(Class){
    const proxy=new Proxy(Class,{
        get:(target,name)=>{
            console.log(target,name);
            if(name in target) return target[name]
            else return target
        },
        set:(target,key,value)=>{
            console.log(target,key,value)

            return target[key] = value
            // if(value!==target[key]){
            //     Class.render();
            // }
            // if(Class.render.toString().indexOf(key)!==-1){
            //     Class.render();
            // }
            
        }
        
    })
}