import {Json} from "@butopen/user-events-model"

export interface HttpResponse {

    headers: any
    body: string | Blob | Json
    status: number
    timestamp: number

}