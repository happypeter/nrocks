import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import { MAX_WIDTH, HEADER_HEIGHT } from '../../constants/GlobalStyle'
import Hero from './Hero'
import CourseList from './CourseList'
import Footer from '../shared/Footer'

const styles = theme => ({
  content: {
    padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 2}px`,
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#eeeeee'
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
        <Hidden mdDown>
          <Hero />
        </Hidden>
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
