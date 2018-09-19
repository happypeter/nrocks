import React from 'react'
import { connect } from 'react-redux'
import Course from '../components/Course'

const CourseContainer = props => <Course {...props} />

export default connect()(CourseContainer)
