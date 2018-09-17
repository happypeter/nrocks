import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import withWidth from '@material-ui/core/withWidth'

const styles = theme => ({})

class Header extends Component {
  render() {
    return <div>header</div>
  }
}

export default compose(
  withStyles(styles),
  withWidth()
)(Header)
