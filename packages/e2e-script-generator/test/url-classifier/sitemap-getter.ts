import GetSitemapLinks from "get-sitemap-links";
import fs from "fs";

export class sitemapGetter {

    async getSitemap(sitemapUrl: string, fileName: string) {

        let rawLinks = await GetSitemapLinks(sitemapUrl);

        for (let rawLink of rawLinks) {
            //let link = rawLink.replaceAll(']]>', "")
            let link = rawLink
            fs.appendFileSync(`./urls/${fileName}.txt`, link + '\n')
        }

    }

}

