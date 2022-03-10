import {PlaywrightE2eScriptGenerator} from "../../src/converter/playwright-e2e-script-converter";

test("test simple conversion", async () => {
    const result = new PlaywrightE2eScriptGenerator().convert([{name: "click", type: "cookie", timestamp: new Date().getTime()}])
    expect(result).toBe("1")
})
