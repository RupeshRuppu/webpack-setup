import "./style.scss";
import { camelCase, flatten } from "lodash";
import { add } from "./code";

const nestedArray = [
	[1, 2],
	[3, 4],
	[5, 6],
];
console.log(flatten(nestedArray));
console.log(camelCase("hello world"));
console.log(add("hello world", "!!!"));

console.log("served from output folder");
