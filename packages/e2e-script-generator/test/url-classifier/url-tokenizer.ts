export class UrlTokenizer {

    tokenize(url: string): string[] {

        url = url.replaceAll('https://www.', "")

        let numberOfSlash = 0

        if (url.includes('/')) {
            numberOfSlash = url.match(new RegExp('/', 'g'))!.length
        }

        const numberOfDigits = url.replace(/[^0-9]/g, '').length;

        url = url.replace(/[0-9]/g, "")

        let numberOfHyphen = 0

        if (url.includes('-')) {
            numberOfHyphen = url.match(new RegExp('-', 'g'))!.length
        }

        url = url
            .replace(/[^\w\s]|_/g, " ")
            .replace(/\s+/g, " ");

        const numberOfTokens = url.trim().split(" ").length

        url = numberOfTokens + ' ' + numberOfSlash + ' ' + numberOfDigits + ' ' + numberOfHyphen + ' ' + url //v2-v3

        // url = numberOfTokens + ' ' + numberOfDigits + ' ' + url //v4

        return url.trim().split(" ") //v2-v3-v4

        // return url.trim() //lstm

    }

}
