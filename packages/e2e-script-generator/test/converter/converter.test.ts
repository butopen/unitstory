import {EventsConverter} from "../../src/converter/events-converter";
import {EventsReader} from "../../src/events-catcher/events-reader";

test("Test simple conversion obtaining session description", async () => {
    const reader = new EventsReader()
    const events = reader.read('product-choice');
    const converter = new EventsConverter();
    const session = converter.convert(events)
    console.log(session.toString())
})
