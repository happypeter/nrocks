import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-static'
import {
  HEADER_HEIGHT,
  MAX_WIDTH,
  DRAWER_WIDTH
} from '../../constants/GlobalStyle'
import Doc from './Doc'
import AppDrawer from './AppDrawer'
import { toggleDrawer } from '../../redux/actions/index'
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
    maxWidth: MAX_WIDTH,
    margin: '24px auto',
    overflowY: 'auto'
  },
  title: {
    textAlign: 'center'
  },
  link: {
    color: '#fff',
    backgroundColor: '#00bcd4',
    marginTop: theme.spacing.unit * 4
  },
  icon: {
    width: 36,
    height: 36
  },
  desc: {
    color: '#fff'
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
            <div className={s.title}>
              <Typography variant="headline">{episode.title}</Typography>
            </div>
            {episode.video ? (
              <Button
                href={episode.video}
                className={s.link}
                variant="contained"
              >
                <PlayArrowIcon className={s.icon} />
                <Typography variant="subheading" className={s.desc}>
                  去到 B 站观看视频
                </Typography>
              </Button>
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
