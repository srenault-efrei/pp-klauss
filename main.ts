import Pony from './Pony'
import DragonBall, { DBHeroes } from './DragonBall'

console.log("--- STEP #1 ---");

const pony: Pony = new Pony();
const poy: Pony = new Pony();

const goku: DragonBall = new DragonBall(DBHeroes.SANGOKU);

pony.isMoved()
goku.isMoved()

