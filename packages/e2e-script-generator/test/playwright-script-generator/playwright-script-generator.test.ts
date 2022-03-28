import {EventsReader} from "../../src/events-catcher/events-reader";
import {SessionGenerator} from "../../src/session-generator/session-generator";

describe(`Test playwright script generator`, () => {
    jest.setTimeout(5000);

    test(`Test playwright script generator`, async () => {
        const reader = new EventsReader()
        const events = reader.read('login-with-autofill.json');
        const session = new SessionGenerator()
        session.createSession(events)
        session.toPlaywrightScript('login-with-autofill', false, 0, false)
        console.log('Playwright script created')
        console.log(session.toString())
    })
})
