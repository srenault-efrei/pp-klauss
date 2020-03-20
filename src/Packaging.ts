import Toy from "./Toy"

export default class Packaging{

    private isopen : boolean
    private toy : Toy | null = null

    constructor(){
        this.isopen = false
        this.toy = null
    }

    public open() : void{
       if(this.isopen === false){
           this.isopen = true 
       }
    }

    public insert(toy: Toy): void{
        this.toy = toy
        this.setStatus(false)
    }
    
    public getToy():Toy |null{
        return this.toy
    }

    public getStatus():boolean{
        return this.isopen
    }
    public setStatus(status: boolean):void{
        this.isopen = status
    }

    public deleteToy():void{

        this.toy = null 
        this.setStatus(true)
    }
}