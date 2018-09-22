import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-static'
import { HEADER_HEIGHT } from '../../constants/GlobalStyle'
import AppSearch from './AppSearch'

const styles = theme => ({
  appBar: {
    backgroundColor: '#eff3f6',
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between'
  },
  home: {
    textDecoration: 'none'
  },
  navIconHide: {
    color: '#000',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})

class Header extends Component {
  handleDrawerToggle = () => {
    this.props.toggleDrawer()
  }

  render() {
    const { classes: s, width, isOnEpisodePage } = this.props
    const elevation = isWidthUp('sm', width) ? 0 : 1
    return (
      <AppBar className={s.appBar} elevation={elevation} position="fixed">
        <Toolbar className={s.toolbar}>
          {isOnEpisodePage ? (
            <IconButton
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={s.navIconHide}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Link to="/" className={s.home}>
            <Typography variant="headline">Nervos</Typography>
          </Link>
          <AppSearch />
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(Header)
