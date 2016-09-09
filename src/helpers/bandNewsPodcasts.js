export default function bandNewsPodcasts(json) {
    let
        itens = json.rss.channel.item,
        podcasts = itens.map((item, index) => {
            let
                title = item.title,
                duration = item.enclosure._length,
                url = item.enclosure._url

            return {
                title,
                duration,
                url
            }
        })

    return podcasts
}
