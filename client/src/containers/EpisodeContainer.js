import React from 'react'
import { connect } from 'react-redux'
import Episode from '../components/Episode'

const EpisodeContainer = props => <Episode {...props} />

export default connect()(EpisodeContainer)
