import "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
import { run } from "./app/app";

console.log("HIII! WELCOME");
const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
console.log("HIII! WELCOME");
console.log("HIII! WELCOME");
