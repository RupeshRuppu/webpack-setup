import "./styles/index.css";

const person = {
	walksDaily: () => true,
};

const rupesh = {
	...person,
	name: "rupesh",
	age: 24,
	occupation: "software dev",
};

const rujith = {
	...person,
	name: "rujith",
	age: 24,
	occupation: "full stack dev",
};

console.log(rupesh, rujith);
