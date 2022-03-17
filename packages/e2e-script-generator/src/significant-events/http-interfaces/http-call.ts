import {HttpRequest} from "./request";
import {HttpResponse} from "./response";

export interface HttpCall {

    name: string
    type: string
    sid: number
    tab: number
    url: string
    status: number
    request: HttpRequest
    response: HttpResponse

}