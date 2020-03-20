import { Meuble } from "./Furniture"

 export default class ConveyorBelt implements Meuble{

    isBusy: boolean

    constructor(){
        this.isBusy = true
    }

    getBusy():boolean{
        return this.isBusy
    }
}
