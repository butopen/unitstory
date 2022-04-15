import GetSitemapLinks from "get-sitemap-links";
import fs from "fs";

jest.setTimeout(300 * 1000)
test('dataset creator test', async () => {

    // Get the sitemap

    const rawLinks = await GetSitemapLinks(
        "https://www.onlinestore.it/1_index_sitemap.xml"
    );

    for (let rawLink of rawLinks) {
        const link = rawLink.replaceAll(']]>', "")
        fs.appendFileSync('./urls/list-of-urls.txt', link + '\n')
    }


    // Retrieve the URLs and create the dataset

    const links = fs.readFileSync('./urls/list-of-urls.txt').toString().split('\n')

    const categoryUrls = links.slice(104087, 104587)
    const categories: { url: string, label: string }[] = []
    for (let categoryUrl of categoryUrls) {
        let record = {url: `${categoryUrl}`, label: `category`}
        categories.push(record)
    }
    const productUrls = links.slice(103586, 104086)
    const products: { url: string, label: string }[] = []
    for (let productUrl of productUrls) {
        let record = {url: `${productUrl}`, label: `product`}
        products.push(record)
    }

    const dataset: { url: string, label: string }[] = categories.concat(products)
    fs.writeFileSync('./dataset/dataset.json', JSON.stringify(dataset))

})
