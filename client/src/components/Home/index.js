import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import { MAX_WIDTH, HEADER_HEIGHT } from '../../constants/GlobalStyle'
import Hero from './Hero'
import CourseList from './CourseList'
import Footer from '../shared/Footer'

const styles = theme => ({
  root: {
    marginTop: HEADER_HEIGHT
  },
  content: {
    padding: `${theme.spacing.unit * 10}px 0`,
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
  },
  text: {
    padding: `${theme.spacing.unit * 10}px 0`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subheading: {
    marginTop: theme.spacing.unit * 2
  }
})

class Home extends React.Component {
  render() {
    const { classes: s, courses } = this.props
    return (
      <div className={s.root}>
        <Hidden smDown>
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
