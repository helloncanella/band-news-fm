import styles from './index.scss';
import React from 'react';
import {AppBar, Tabs, Tab} from 'material-ui'
import GroupIcon from 'material-ui/svg-icons/social/group';
import PersonIcon from 'material-ui/svg-icons/social/person';
import AudioIcon from 'material-ui/svg-icons/av/play-circle-outline';

import ColumnistsList from '../columnists-list/columnists-list'
import AudioControl from '../audio-control/audio-control'



export default class BandNews extends React.Component {
  render() {
    return (
      <div className="app">
        <AppBar title="Band News FM">

        </AppBar>
        <Tabs>
          <Tab
            icon={<GroupIcon />}
            >
            <ColumnistsList />
          </Tab>
          <Tab
            icon={<PersonIcon />}
            >
          </Tab>
          <Tab
            icon={<AudioIcon />}
            >
            <AudioControl />
          </Tab>

        </Tabs>
      </div>
    )
  }
}