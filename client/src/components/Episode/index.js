import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-static'
import { HEADER_HEIGHT, MAX_WIDTH } from '../../constants/GlobalStyle'
import Doc from './Doc'

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: HEADER_HEIGHT
  },
  left: {
    width: 260,
    padding: theme.spacing.unit * 4,
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    backgroundColor: '#eff3f6',
    flexShrink: 0,
    position: 'fixed',
    left: 0,
    top: HEADER_HEIGHT,
    bottom: 0
  },
  right: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: '24px auto',
    overflowY: 'auto'
  },
  title: {
    textAlign: 'center'
  }
})

class Episode extends Component {
  render() {
    const { classes: s, course, episodes, episode, markdown } = this.props
    return (
      <div className={s.root}>
        <div className={s.left}>
          {episodes.map(ep => (
            <Link
              to={`/${course.id}/${ep.id}`}
              className={s.listItem}
              key={ep.id}
            >
              <Typography>{ep.title}</Typography>
            </Link>
          ))}
        </div>
        <div className={s.right}>
          <div className={s.title}>
            <Typography variant="headline">{episode.title}</Typography>
          </div>
          <Doc markdown={markdown} />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Episode)
