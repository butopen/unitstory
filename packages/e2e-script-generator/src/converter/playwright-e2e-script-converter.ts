import {BLCookieEvent, BLEvent} from "@butopen/user-events-model"

export class PlaywrightE2eScriptGenerator {
    
    convert(events:BLEvent[]):string{
        
        for(let e of events){
            if(e.name == "cookie-data"){
                const cookieEvent = e as BLCookieEvent
                
            }
        }
        
        
        return events.length+""
    }
    
    
}
