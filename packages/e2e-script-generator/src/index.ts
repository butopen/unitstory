import {PlaywrightE2eScriptGenerator} from "./converter/playwright-e2e-script-converter";

const result = new PlaywrightE2eScriptGenerator().convert([])
console.log(result)
