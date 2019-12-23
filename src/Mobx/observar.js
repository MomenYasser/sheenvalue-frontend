export default function observer(Class){
        return new Proxy(Class,{
            set:(target,key,value)=>{
                target[key]=value;
    
                if(value!==target[key]){
                    Class.render();
                }
    
                if(Class.render.toString().indexOf(key) !== -1){
                    Class.render();
                }
            }
        });
}