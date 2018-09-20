import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { MAX_WIDTH, HEADER_HEIGHT } from '../../constants/GlobalStyle'
import Hero from './Hero'
import CourseList from './CourseList'
import Footer from '../shared/Footer'

const styles = theme => ({
  content: {
    padding: theme.spacing.unit * 2,
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: '0 auto'
  },
  listWrap: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      width: 700,
      margin: '0 auto'
    },
    [theme.breakpoints.up('lg')]: {
      width: 1000,
      margin: '0 auto'
    },
    [theme.breakpoints.up('xl')]: {
      width: 1100,
      margin: '0 auto'
    }
  }
})

class Home extends React.Component {
  render() {
    const { classes: s, courses } = this.props
    return (
      <div>
        <Hero />
        <div className={s.content}>
          <div className={s.listWrap}>
            <CourseList courses={courses} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Home)
