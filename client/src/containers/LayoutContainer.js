import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Layout from '../components/Layout/Layout'

const LayoutContainer = props => <Layout {...props} />

// Connect can break router , the fix is withRouter:
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
export default withRouter(connect()(LayoutContainer))
