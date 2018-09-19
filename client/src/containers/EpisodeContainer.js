import React from 'react'
import { withRouteData } from 'react-static'
import Episode from '../components/Episode'

const EpisodeContainer = props => <Episode {...props} />

export default withRouteData(EpisodeContainer)
