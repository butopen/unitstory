import {EventsReader} from "../../src/events-catcher/events-reader";
import {EventsConverter} from "../../src/converter/events-converter";

describe(`Test playwright script generator`, () => {
    jest.setTimeout(5000);

    test(`Test playwright script generator`, async () => {
        const reader = new EventsReader()
        const events = reader.read('product-choice.json');
        const converter = new EventsConverter();
        const session = converter.convert(events)
        await session.toPlaywrightScript(false, 400, 'product-choice')
        console.log('Playwright script created')
    })
})
