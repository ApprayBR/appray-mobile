import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PrayerRequestsList from 'appray/src/components/presentational/PrayerRequestsList';
import { fetchNextPrayerRequestsPageFromAPI } from 'appray/src/actions/prayerRequests';

class PrayerRequestsListContainer extends Component {
  
  componentDidMount() {
    this.props.fetchNextPrayerRequestsPageFromAPI();
  }
  
  render() {
    return <PrayerRequestsList requests={ this.props.requests } isLoading={ this.props.isLoading } hasErrored={ this.props.hasErrored } navigation={ this.props.navigation } fetchNextPrayerRequestsPageFromAPI= { this.props.fetchNextPrayerRequestsPageFromAPI } />;
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.requests.isLoading,
    requests: state.requests.items,
    hasErrored: state.requests.hasErrored,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchNextPrayerRequestsPageFromAPI }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PrayerRequestsListContainer);
