const STORAGE_KEY="mall"
export default{
    getItem(key,module){
        let storage_item=this.getStorage()
        if(module){
            let value=this.getItem(module)
            if(value) return value[key]          
        }else{
            return storage_item[key]
        }           
    },
    setItem(key,val,module){
        let storage_item=this.getStorage()
        if(module){
            let value=storage_item[module]
             value[key]=val
            this.setItem(module,value)
        }else{
            storage_item[key]=val
            window.sessionStorage.getItem(STORAGE_KEY,JSON.stringify(storage_item))
        }
        
    },
    deleteItem(key,module){
        let storage_item=this.getStorage()
        if(module){
            if(storage_item.module)  delete storage_item.module[key]
            window.sessionStorage.getItem(STORAGE_KEY,JSON.stringify(storage_item))
        }else{
            delete storage_item[key]
            window.sessionStorage.getItem(STORAGE_KEY,JSON.stringify(storage_item))
        }
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}") 
    }
}