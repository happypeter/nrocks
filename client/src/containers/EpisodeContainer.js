import React from 'react'
import { withRouteData } from 'react-static'
import { connect } from 'react-redux'
import Episode from '../components/Episode'
import {
  toggleDrawer,
  setOnEpisodePage,
  clearOnEpisodePage
} from '../redux/actions/index'

class EpisodeContainer extends React.Component {
  componentDidMount() {
    this.props.setOnEpisodePage()
  }

  componentWillUnmount() {
    this.props.clearOnEpisodePage()
  }

  render() {
    return <Episode {...this.props} />
  }
}

const mapStateToProps = state => ({
  isDrawerOpen: state.common.isDrawerOpen
})

export default connect(
  mapStateToProps,
  { toggleDrawer, setOnEpisodePage, clearOnEpisodePage }
)(withRouteData(EpisodeContainer))
