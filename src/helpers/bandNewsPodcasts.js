export default function bandNewsPodcasts(json) {
    let
        itens = json.rss.channel[0].item,
        podcasts = itens.map((item, index) => {
            let
                title = item.title[0],
                pubDate = item.pubDate[0],
                url = item.enclosure[0]['$'].url
            return {
                title,
                pubDate,
                url
            }
        })

    return podcasts
}
