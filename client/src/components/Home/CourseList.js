import React, { Component } from 'react'
import CourseCard from './CourseCard'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { ACCENT_COLOR } from '../../constants/GlobalStyle'

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 auto'
  },
  section: {
    marginBottom: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    width: 32,
    borderBottom: `4px solid ${ACCENT_COLOR}`,
    marginTop: theme.spacing.unit
  }
})

class CourseList extends Component {
  render() {
    const { courses, classes: s } = this.props

    let courseList = courses.map((item, index) => (
      <Grid key={index} item xs={12} sm={6} lg={4} xl={4}>
        <CourseCard course={item} />
      </Grid>
    ))

    return (
      <div className={s.root}>
        <div className={s.section}>
          <Typography variant="title">最新课程</Typography>
          <div className={s.line} />
        </div>
        <Grid container>{courseList}</Grid>
      </div>
    )
  }
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
}

export default withStyles(styles)(CourseList)
