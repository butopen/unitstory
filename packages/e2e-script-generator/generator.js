const chokidar = require('chokidar');

//const execSync = require('child_process').execSync
const childProcess = require('child_process');

function generateScript() {

    /*
    execSync(`npm run generate:script`);
    */

    childProcess.execSync(`npm run generate:script`, {maxBuffer: 1024*1024*1024})


    const fs = require("fs")
    const content = fs.readFileSync("./playwright-script-generated/playwright-script.ts", "utf8")
    const lines = content.split("\n")
    fs.writeFileSync("./test/playwright-script-generator/temp.test.ts", `import {chromium} from "playwright"

jest.setTimeout(3000 * 100)
test("temp test", async () => {
${lines.slice(2, lines.length - 3).join("\n")}
})
`, {encoding: 'utf8', flag: 'w'})
    // execSync(`npm run run:generated:script`);
}

// One-liner for current directory
chokidar.watch('./src/significant-events/**/*.ts').on('change', (event, path) => {
    console.log(event, path);
    generateScript()
});
generateScript()


