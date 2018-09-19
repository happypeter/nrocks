import React from 'react'
import { withRouteData } from 'react-static'
import Course from '../components/Course'

const CourseContainer = props => <Course {...props} />

export default withRouteData(CourseContainer)
