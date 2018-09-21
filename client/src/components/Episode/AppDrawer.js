import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-static'
import { DRAWER_WIDTH } from '../../constants/GlobalStyle'

const styles = theme => ({
  root: {},
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
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
    // this.props.toggleDrawer()
  }

  render() {
    const { classes: s, theme, episodes, course, isDrawerOpen } = this.props
    const drawer = (
      <div>
        <div className={s.toolbar} />
        {episodes.map(ep => (
          <Link
            to={`/${course.id}/${ep.id}`}
            className={s.listItem}
            key={ep.id}
          >
            <Typography variant="body2">{ep.title}</Typography>
          </Link>
        ))}
      </div>
    )

    return (
      <div>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open
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
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(AppDrawer)
