import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-static'
import IconButton from '@material-ui/core/IconButton'
import { DRAWER_WIDTH } from '../../constants/GlobalStyle'
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
    width: DRAWER_WIDTH
  },
  listItem: {
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.unit}px  ${theme.spacing.unit * 3}px`
  }
})

class AppDrawer extends React.Component {
  handleDrawerToggle = () => {
    this.props.toggleDrawer()
  }

  render() {
    const { classes: s, episodes, course, open } = this.props
    const drawer = (
      <div>
        <div className={classNames(s.toolbar, s.toolbarCus)}>
          <IconButton onClick={this.handleDrawerToggle}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        {episodes.map(ep => (
          <Link
            to={`/${course.id}/${ep.id}`}
            className={s.listItem}
            key={ep.id}
            onClick={this.handleDrawerToggle}
          >
            <Typography variant="body2" component="div">
              {ep.title}
            </Typography>
          </Link>
        ))}
      </div>
    )

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={open}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: s.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
            {drawer}
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
          </Drawer>
        </Hidden>
      </div>
    )
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  episodes: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired
}

export default withStyles(styles)(AppDrawer)
