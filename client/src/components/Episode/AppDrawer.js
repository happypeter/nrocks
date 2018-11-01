import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-static'
import IconButton from '@material-ui/core/IconButton'
import {
  DRAWER_WIDTH,
  DIVIDER_COLOR,
  ACCENT_COLOR
} from '../../constants/GlobalStyle'
import ArrowBackIcon from '../svg/ArrowBack'

const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  toolbarCus: {
    borderBottom: '1px solid #eee',
    display: 'flex',
    alignItems: 'center'
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    justifyContent: 'space-between'
  },
  list: {
    marginTop: theme.spacing.unit * 2
  },
  listItem: {
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.unit}px  ${theme.spacing.unit * 2}px`,
    '&:hover': {
      backgroundColor: DIVIDER_COLOR
    },
    '&.active $text': {
      borderLeft: `4px solid ${ACCENT_COLOR}`,
      fontWeight: 600
    }
  },
  text: {
    paddingLeft: theme.spacing.unit
  },
  drawer: {
    flexGrow: 1
  },
  bottom: {
    display: 'block',
    flexShrink: 0,
    borderTop: '1px solid #eee',
    padding: theme.spacing.unit * 2,
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    color: 'rgba(33,33,33,.54)',
    width: 16,
    height: 16
  },
  courseTitle: {
    paddingLeft: theme.spacing.unit,
    color: ACCENT_COLOR
  }
})

const AppDrawer = ({ classes: s, episodes, course, open, toggleDrawer }) => {
  const handleDrawerToggle = () => {
    toggleDrawer()
  }

  const drawer = (
    <div className={s.drawer}>
      <div className={classNames(s.toolbar, s.toolbarCus)}>
        <IconButton onClick={handleDrawerToggle}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className={s.list}>
        {episodes.map(ep => (
          <Link
            to={`/${course.id}/${ep.id}`}
            className={s.listItem}
            key={ep.id}
            onClick={handleDrawerToggle}
          >
            <Typography variant="body1" className={s.text}>
              {ep.title}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <div>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: s.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
          <Link to={`/${course.id}`} className={s.bottom}>
            <ArrowBackIcon className={s.icon} />
            <Typography variant="caption" className={s.courseTitle}>
              {course.title}
            </Typography>
          </Link>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: s.drawerPaper
          }}
        >
          {drawer}
          <Link to={`/${course.id}`} className={s.bottom}>
            <ArrowBackIcon className={s.icon} />
            <Typography variant="caption" className={s.courseTitle}>
              {course.title}
            </Typography>
          </Link>
        </Drawer>
      </Hidden>
    </div>
  )
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  episodes: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
}

export default withStyles(styles)(AppDrawer)
