import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-static'
import {
  HEADER_HEIGHT,
  MAX_WIDTH,
  DRAWER_WIDTH
} from '../../constants/GlobalStyle'
import Doc from './Doc'
import AppDrawer from './AppDrawer'
import { toggleDrawer } from '../../redux/actions/index'

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: HEADER_HEIGHT
  },
  rightWrapper: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH
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
            <Doc markdown={markdown} />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Episode)
