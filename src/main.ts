import Pony from './Pony'
import DragonBall, { DBHeroes } from './DragonBall'
import Packaging from './Packaging'
import Elf from './Elf';
import Box from './Box';
import GiftWWrap from './GitfWrap';
import Toy from './Toy';

console.log("--- STEP #1 ---");

const pony: Pony = new Pony();
const goku: DragonBall = new DragonBall(DBHeroes.SANGOKU);

pony.isMoved()
goku.isMoved()

// Step #2
console.log("--- STEP #2 ---")

const majdi: Elf = new Elf("makiboto")
const box: Packaging = new Box()
majdi.pack(box, goku)
box.open()
majdi.pack(box, goku)
majdi.pack(box, goku)

const paper: Packaging = new GiftWWrap()
majdi.pack(paper, pony)
majdi.pack(paper, pony)

try {
  majdi.unpack(paper);
} catch (e) {
  console.log(e.message);
}
