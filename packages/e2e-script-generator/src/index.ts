import {EventsConverter} from "./converter/events-converter";
import {EventsReader} from "./events-catcher/events-reader";

(async () => {
    const reader = new EventsReader()
    const events = reader.read('product-choice');
    const converter = new EventsConverter();
    const session = converter.convert(events)
    await session.toPlaywrightScript(false, 400)
    console.log('Playwright script created')
})()
