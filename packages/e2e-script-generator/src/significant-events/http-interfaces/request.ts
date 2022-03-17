import {Json} from "@butopen/user-events-model"

export interface HttpRequest {

    headers: any
    method: string
    path: string
    timestamp: number
    url: string
    body?: string | Blob | Json

}