import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/podcasts-actions/podcasts-actions';

import ColumnistsList from '../../components/columnists-list/columnists-list'

import columnistsData from '../../data/columnists'


function mapStateToProps(state) {
  return {
      columnists: columnistsData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPodcasts: (name, url)=>{
      dispatch(actions.fetchPodcasts(name,url))
    }  
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(ColumnistsList);
