import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-static'
import Typography from '@material-ui/core/Typography'
import {
  MAX_WIDTH,
  HEADER_HEIGHT,
  ACCENT_COLOR
} from '../../constants/GlobalStyle'
import Footer from '../shared/Footer'
import HeroDiv from '../svg/HeroDiv'

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff'
  },
  header: {
    padding: `${theme.spacing.unit * 10}px 0 ${theme.spacing.unit * 12}px`,
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing.unit * 15
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing.unit * 18
    },
    backgroundColor: '#45C289',
    backgroundImage: `linear-gradient(60deg, #4bda99, #3da274)`,
    marginTop: HEADER_HEIGHT,
    position: 'relative'
  },
  headerInner: {
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    maxWidth: MAX_WIDTH - 220,
    margin: '0 auto',
    padding: `0 ${theme.spacing.unit}px`
  },
  date: {
    backgroundColor: '#3da274',
    padding: `${theme.spacing.unit / 2}px`,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4,
    width: 80,
    fontSize: 12,
    fontFamily: 'Roboto'
  },
  headline: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: theme.spacing.unit * 2
  },
  subtitle: {
    color: '#fff',
    marginBottom: theme.spacing.unit * 2
  },
  list: {
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    maxWidth: MAX_WIDTH - 220,
    margin: `${theme.spacing.unit * 4}px auto`
  },
  listItem: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
    '&:hover': {
      backgroundColor: '#F2F7F4'
    }
  },
  icon: {
    color: 'rgba(33, 33, 33, 0.8)',
    '&:hover': {
      color: '#a7cbd0'
    }
  },
  hero: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 'auto',
    marginBottom: -1,
    width: '100%'
  },
  number: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    border: `2px solid ${ACCENT_COLOR}`,
    borderRadius: '50%',
    marginRight: theme.spacing.unit * 2,
    color: ACCENT_COLOR,
    flexShrink: 0,
    fontSize: 12,
    fontFamily: 'Roboto',
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
      width: 36,
      height: 36
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
      width: 42,
      height: 42,
      marginRight: theme.spacing.unit * 3
    }
  },
  title: {
    fontSize: 16,
    [theme.breakpoints.up('lg')]: {
      fontSize: 18
    }
  }
})

class Course extends Component {
  render() {
    const { classes: s, episodes, course } = this.props
    return (
      <div className={s.root}>
        <div className={s.header}>
          <div className={s.headerInner}>
            <Typography variant="headline" className={s.headline}>
              {course.title}
            </Typography>
            <Typography variant="body2" className={s.subtitle}>
              {course.desc}
            </Typography>
            <div className={s.date}>{course.date}</div>
          </div>
          <HeroDiv className={s.hero} />
        </div>

        <div className={s.list}>
          {episodes.map((ep, index) => (
            <Link
              to={`/${course.id}/${ep.id}`}
              className={s.listItem}
              key={ep.id}
            >
              <div className={s.number}>{index}</div>
              <Typography className={s.title}>{ep.title}</Typography>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Course)
