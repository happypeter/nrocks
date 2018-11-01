import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Header from './Header'

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default
  }
})

const Layout = ({ children, classes: s, toggleDrawer, isOnEpisodePage }) => (
  <div>
    <Header toggleDrawer={toggleDrawer} isOnEpisodePage={isOnEpisodePage} />
    <div className={s.content}>{children}</div>
  </div>
)

export default withStyles(styles)(Layout)
