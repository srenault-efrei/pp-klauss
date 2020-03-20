import Figurine from './Figurine'

export enum DBHeroes {
    SANGOKU,
    BEJITA,
    BEERUS,
    KAMESENNIN
}


export default class DragonBall extends Figurine {

    private _character: DBHeroes


    constructor(type: DBHeroes) {

        super()

        this._character = type
        this.dragonBallSence()
    }


    public getType(): string {
        return 'Dragon Ball figurine ' + DBHeroes[this._character]
    }

    public isMoved(): void {
        console.log('Kamé Hamé Ha!\n')
    }

    public dragonBallSence(): void {
        
console.log(`${this.getType()} is singing -->
'CHA-LA HEAD CHA-LA'
'Nani ga okite mo kibun wa heno-heno kappa'
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking !
        `)

    }

}