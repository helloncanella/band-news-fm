import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/podcasts-actions/podcasts-actions';

import PodcastsList from '../../components/podcasts-list/podcasts-list'



function mapStateToProps(state) {
  return {
      podcasts: state.podcasts.fetchedPodcasts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectPodcast: (url)=>{
      dispatch(actions.selectPodcast(url))
    }  
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(PodcastsList);
