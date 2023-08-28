import Add from "./components/add.js";
import Sub from "./components/sub.js";
import Div from "./components/div.js";
import Mult from "./components/mult.js";

const calculatorAdd = new Add(10, 10);
console.log("Addition:", calculatorAdd.add());

const calculatorSub = new Sub(10, 10);
console.log("Subtraction:", calculatorSub.sub());

const calculatorDiv = new Div(10, 10);
console.log("Division:", calculatorDiv.div());

const calculatorMult = new Mult(10, 10);
console.log("Multiplication:", calculatorMult.mult());