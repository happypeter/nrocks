import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Header from './Header'

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default
  }
})

class Layout extends React.Component {
  render() {
    const { children, classes: s, isDrawerOpen, toggleDrawer } = this.props

    return (
      <div>
        <Header toggleDrawer={toggleDrawer} />
        <div className={classNames(s.content)}>{children}</div>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
