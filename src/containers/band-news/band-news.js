import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../actions/CounterActions';
import {Tabs, Tab, AppBar} from 'material-ui'

//Tabs Icons
import GroupIcon from 'material-ui/svg-icons/social/group';
import PersonIcon from 'material-ui/svg-icons/social/person';
import AudioIcon from 'material-ui/svg-icons/av/play-circle-outline';

//Tabs Components
import ColumnistsList from '../../components/columnists-list/columnists-list'
import AudioControl from '../../components/audio-control/audio-control'


/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export class BandNews extends Component {
  _renderTabs() {
    const { tabs } = this.props

    const rendered = tabs.map((item, index) => {

      let {component, icon} = item

      return (
        <Tab icon={icon} key={index}>
          {component}
        </Tab>
      )
    })

    return rendered

  }

  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    let { titleAppBar } = this.props


    return (
      <div className="band-news">
        <AppBar title={titleAppBar}/>
        <Tabs>
          {this._renderTabs() }
        </Tabs>
      </div>
    );
  }
}

BandNews.propTypes = {
  tabs: PropTypes.array.isRequired,
  titleAppBar: PropTypes.string.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  return {
    tabs: [
      {
        component: <ColumnistsList />,
        icon: <GroupIcon />
      },
      {
        component: (<h1>Hello</h1>),
        icon: <PersonIcon />
      },
      {
        component: <AudioControl />,
        icon: <AudioIcon />
      }
    ],
    titleAppBar: 'Olá' 
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {};
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandNews);
