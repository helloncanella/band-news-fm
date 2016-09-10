import React, {PropTypes} from 'react'
import {List, ListItem, Divider, Avatar} from 'material-ui'

export default class PodcastsList extends React.Component{
    
    render(){ 
        
        let {podcasts, selectPodcast} = this.props

        const list = podcasts.map((podcast, index)=>{
            let {url, title, pubDate} = podcast
      
            return (
                <div className="podcast-item"  key={index}>
                    <ListItem
                        onTouchTap={()=>{selectPodcast(url)}}
                        className='list-item' 
                        primaryText={title}
                        secondaryText={pubDate}
                    />
                    <Divider/>                
                </div>
            )
        })
        
        return <List className="columnistsList">{list}</List>
    }
}

PodcastsList.propTypes = {
    podcasts : PropTypes.array.isRequired,
    selectPodcast: PropTypes.func.isRequired
}