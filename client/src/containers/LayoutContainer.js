import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Layout from '../components/Layout/Layout'
import { toggleDrawer } from '../redux/actions'

const LayoutContainer = props => <Layout {...props} />

const mapStateToProps = state => ({
  isDrawerOpen: state.common.isDrawerOpen
})

export default withRouter(
  connect(
    mapStateToProps,
    { toggleDrawer }
  )(LayoutContainer)
)
