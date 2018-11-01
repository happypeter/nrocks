import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import {
  HEADER_HEIGHT,
  DRAWER_WIDTH,
  ACCENT_COLOR,
  DOC_WIDTH
} from '../../constants/GlobalStyle'
import Doc from './Doc'
import AppDrawer from './AppDrawer'
import PlayCircleIcon from '../svg/PlayCircle'
import CreateIcon from '../svg/Create'
import Navigation from './Navigation'
import config from '../../../config'

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: HEADER_HEIGHT,
    marginBottom: theme.spacing.unit * 8
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
    maxWidth: DOC_WIDTH,
    margin: '24px auto',
    overflowY: 'auto'
  },
  h1: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    fontWeight: 500,
    fontSize: 26
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit * 4,
    textDecoration: 'none',
    '& h3': {
      marginLeft: 8
    }
  },
  desc: {
    color: ACCENT_COLOR,
    borderBottom: `1px solid ${ACCENT_COLOR}`
  },
  line: {
    height: 1,
    backgroundColor: '#f5f3f7',
    border: 'none',
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 3
  },
  github: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textDecoration: 'none',
    '& p': {
      marginLeft: theme.spacing.unit / 2,
      color: ACCENT_COLOR
    }
  }
})

const Episode = ({
  classes: s,
  course,
  episodes,
  episode,
  markdown,
  isDrawerOpen,
  toggleDrawer
}) => (
  <div className={s.root}>
    <AppDrawer
      episodes={episodes}
      course={course}
      open={isDrawerOpen}
      toggleDrawer={toggleDrawer}
    />
    <div className={s.rightWrapper}>
      <div className={classNames('docSearch-content', s.right)}>
        <Typography variant="headline" className={s.h1}>
          {episode.title}
        </Typography>

        {episode.video ? (
          <a href={episode.video} className={s.link} target="_blank">
            <PlayCircleIcon width={32} height={32} fill={ACCENT_COLOR} />
            <Typography variant="subheading" className={s.desc}>
              到 B 站观看视频
            </Typography>
          </a>
        ) : null}
        <Doc markdown={markdown} />
        <Navigation
          episodes={episodes}
          episodeId={episode.id}
          courseId={course.id}
        />
        <hr className={s.line} />
        <a
          href={`${config.gitHubRepo}/${course.id}/${episode.id}.md`}
          target="_blank"
          className={s.github}
        >
          <CreateIcon width={20} height={20} fill={ACCENT_COLOR} />
          <Typography variant="body1">edit this page on GitHub</Typography>
        </a>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(Episode)
