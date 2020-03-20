import Packaging from "./Packaging"
import Toy from "./Toy"
import GiftWWrap from "./GitfWrap"
import Table from "./Table"

export default class Elf {

    private _nickname: string

    constructor(nickname: string) {
        this._nickname = nickname
    }

    getNickname(): string {
        return this._nickname
    }

    setNickname(nickname: string): void {
        this._nickname = nickname
    }

    pack(packaging: Packaging, toy: Toy): void {

        if (packaging.getStatus() === true && packaging.getToy() === null) {
            packaging.insert(toy)
            if(packaging instanceof GiftWWrap){
                packaging.setStatus(true)
            }
            console.log("Yeaaaah! Just packing the toy ~~ "+toy.getType()+" ~~")
        } else {
            if (packaging.getStatus() === false) {
               console.log("Sorry this package is not open");
            }
            if (packaging.getToy() !== null) {
                console.log("Sorry this package already filled");
            }
        }

    }
   
    unpack(packaging: Packaging): void {
        if(packaging.getStatus()=== true || packaging.getToy()===null){
            console.log('Sorry this package is already empty')
        }
        else{
            packaging.deleteToy()
            console.log('Ooooooh! Just unpacking the toy')
            // console.log('Ooooooh! Just unpacking the toy ~~ ' +packaging.getToy()?.getType()+'~~')
        }
    }

    put(table: Table, toy: Toy){
        
    }
    take(table: Table, toy: Toy){

    }
}