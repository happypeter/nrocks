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
    const { children, classes: s } = this.props

    return (
      <div>
        <Header />
        <div className={classNames(s.content)}>{children}</div>
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
