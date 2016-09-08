import React from 'react'
import {List, ListItem, Divider, Avatar} from 'material-ui'

import columnists from '../../data/columnists'

export default class ColumnistsList extends React.Component{
    
    render(){
        
        const list = columnists.map((columnist)=>{
            let {name, image, slug} = columnist
            
            return (
                <div className={slug}  key={slug}>
                    <ListItem 
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