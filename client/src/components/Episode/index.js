import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-static'
import {
  HEADER_HEIGHT,
  DRAWER_WIDTH,
  ACCENT_COLOR
} from '../../constants/GlobalStyle'
import Doc from './Doc'
import AppDrawer from './AppDrawer'
import PlayArrowIcon from '../svg/PlayArrow'
import Navigation from './Navigation'

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: HEADER_HEIGHT
  },
  rightWrapper: {
    width: '100%',
    padding: `0 ${theme.spacing.unit * 3}px`,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH
    }
  },
  right: {
    width: '100%',
    maxWidth: 680,
    margin: '24px auto',
    overflowY: 'auto'
  },
  h1: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    fontWeight: 500
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 4,
    color: ACCENT_COLOR
  },
  icon: {
    width: 36,
    height: 36
  },
  desc: {
    color: ACCENT_COLOR
  }
})

class Episode extends Component {
  componentDidMount() {
    this.props.setOnEpisodePage()
  }

  componentWillUnmount() {
    this.props.clearOnEpisodePage()
  }

  render() {
    const {
      classes: s,
      course,
      episodes,
      episode,
      markdown,
      isDrawerOpen,
      toggleDrawer
    } = this.props
    return (
      <div className={s.root}>
        <AppDrawer
          episodes={episodes}
          course={course}
          open={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
        <div className={s.rightWrapper}>
          <div className={s.right}>
            <Typography variant="headline" className={s.h1}>
              {episode.title}
            </Typography>

            {episode.video ? (
              <Link to={episode.video} className={s.link}>
                <PlayArrowIcon className={s.icon} />
                <Typography variant="subheading" className={s.desc}>
                  到 B 站观看视频
                </Typography>
              </Link>
            ) : null}
            <Doc markdown={markdown} />
            <Navigation
              episodes={episodes}
              episodeId={episode.id}
              courseId={course.id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Episode)
