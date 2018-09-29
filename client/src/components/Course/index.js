import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-static'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { MAX_WIDTH, HEADER_HEIGHT } from '../../constants/GlobalStyle'
import Footer from '../shared/Footer'
import PlayArrowIcon from '../svg/PlayArrow'

const styles = theme => ({
  header: {
    padding: `${theme.spacing.unit * 10}px 0`,
    backgroundColor: '#a7cbd0',
    background: `linear-gradient(341deg,rgba(217,240,244,1) 0%,rgba(40,159,176,1) 100%)`,
    marginTop: HEADER_HEIGHT
  },
  headerInner: {
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    maxWidth: MAX_WIDTH - 220,
    margin: '0 auto'
  },
  date: {
    backgroundColor: '#6EBFCB',
    width: 80,
    padding: theme.spacing.unit / 4,
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4
  },
  title: {
    color: '#fff',
    fontWeight: 500,
    marginBottom: theme.spacing.unit * 2
  },
  subtitle: {
    color: '#fff',
    marginBottom: theme.spacing.unit * 2,
    fontWeight: 400
  },
  list: {
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    maxWidth: MAX_WIDTH - 220,
    margin: '32px auto',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`
  },
  listItem: {
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.unit * 2}px 0`,
    borderBottom: '1px solid #eeeeee',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  icon: {
    color: 'rgba(33, 33, 33, 0.8)',
    '&:hover': {
      color: '#a7cbd0'
    }
  }
})

class Course extends Component {
  render() {
    const { classes: s, episodes, course } = this.props
    return (
      <div>
        <div className={s.header}>
          <div className={s.headerInner}>
            <Typography variant="headline" className={s.title}>
              {course.title}
            </Typography>
            <Typography variant="body2" className={s.subtitle}>
              {course.desc}
            </Typography>
            <Typography variant="caption" className={s.date}>
              {course.date}
            </Typography>
          </div>
        </div>
        <Paper className={s.list} elevation={1}>
          {episodes.map(ep => (
            <Link
              to={`/${course.id}/${ep.id}`}
              className={s.listItem}
              key={ep.id}
            >
              <Typography variant="subheading">{ep.title}</Typography>
              <PlayArrowIcon className={s.icon} />
            </Link>
          ))}
        </Paper>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Course)
