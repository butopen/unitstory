const chokidar = require('chokidar');


const execSync = require('child_process').execSync;

function generateScript() {
    execSync(`npm run generate:login`);

    const fs = require("fs")
    const content = fs.readFileSync("./playwright-script-generated/login-with-autofill.ts", "utf8")
    const lines = content.split("\n")
    fs.writeFileSync("./test/playwright-script-generator/temp.test.ts", `import {chromium} from "playwright"

jest.setTimeout(3000 * 100)
test("temp test", async () => {
${lines.slice(2, lines.length - 3).join("\n")}
})
`, {encoding: 'utf8', flag: 'w'})
//execSync(`npm run run:generated:login`);
}

// One-liner for current directory
chokidar.watch('./src/significant-events/**/*.ts').on('change', (event, path) => {
    console.log(event, path);
    generateScript()
});


