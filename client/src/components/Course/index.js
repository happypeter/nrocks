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
    textAlign: 'center',
    lineHeight: 2,
    marginTop: HEADER_HEIGHT
  },
  list: {
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    maxWidth: MAX_WIDTH - 240,
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
          <Typography variant="headline">{course.title}</Typography>
          <Typography variant="subheading">{course.desc}</Typography>
          <Typography variant="body2">{course.date}</Typography>
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
