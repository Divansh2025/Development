// in package.json: "type": "module", otherwise naming your both files with .mjs

// default import
import multiply from "./mathOperationsM.mjs";
console.log(multiply(2, 4));

// named import
import { add, subtract, divide } from "./mathOperationsM.mjs";
console.log(add(2, 4));
