import React from 'react'
import { withRouteData } from 'react-static'
import Home from '../components/Home'

const HomeContainer = props => <Home {...props} />

export default withRouteData(HomeContainer)
