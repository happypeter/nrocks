import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { HEADER_HEIGHT, ACCENT_COLOR } from '../../constants/GlobalStyle'
import Hero from './Hero'
import CourseList from './CourseList'
import Footer from '../shared/Footer'
import Cat from './Cat'

const styles = theme => ({
  root: {
    marginTop: HEADER_HEIGHT,
    backgroundColor: '#ffffff'
  },
  content: {
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px`,
    width: '100%',
    margin: '0 auto'
  },
  listWrap: {
    backgroundColor: '#F2F7F4',
    display: 'flex',
    margin: '0 auto',
    padding: '48px 24px',
    [theme.breakpoints.up('md')]: {
      width: 800
    },
    [theme.breakpoints.up('lg')]: {
      width: 1000
    },
    [theme.breakpoints.up('xl')]: {
      width: 1100
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

class Home extends React.Component {
  render() {
    const { classes: s, courses } = this.props
    return (
      <div className={s.root}>
        <Hidden smDown>
          <Hero />
        </Hidden>
        <Cat />
        <div className={s.content}>
          <div className={s.section}>
            <Typography variant="title">最新课程</Typography>
            <div className={s.line} />
          </div>{' '}
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
