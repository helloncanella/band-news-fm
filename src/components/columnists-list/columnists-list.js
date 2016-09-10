import React, {PropTypes} from 'react'
import {List, ListItem, Divider, Avatar} from 'material-ui'

export default class ColumnistsList extends React.Component{
    
    render(){
        
        let {columnists, fetchPodcasts} = this.props

        const list = columnists.map((columnist)=>{
            let {name, image, slug, url} = columnist
      
            return (
                <div className={slug}  key={slug}>
                    <ListItem
                        onTouchTap={()=>{fetchPodcasts(name, url)}}
                        className='list-item' 
                        primaryText={name}
                        leftAvatar={<Avatar src={image}/>}
                    />
                    <Divider/>                
                </div>
            )
        })
        
        return <List className="columnistsList">{list}</List>
    }
}

ColumnistsList.propTypes = {
    columnists : PropTypes.array.isRequired,
    fetchPodcasts: PropTypes.func.isRequired
}