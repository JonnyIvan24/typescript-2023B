import { Modulo1 } from "./src/modules/Modulo1";
import { Modulo1 as TestModulo } from "./src/modules/test/Modulo1";
import DefaultFunction, { MultipleExport1, MultipleExport2} from "./src/modules/Multipleexports";

const modulo1 = new Modulo1()
modulo1.print()

const testModulo = new TestModulo()
testModulo.print()

console.log(DefaultFunction(1, 2))
