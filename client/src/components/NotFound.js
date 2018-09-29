import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { HEADER_HEIGHT } from '../constants/GlobalStyle'

const styles = theme => ({
  root: {
    marginTop: HEADER_HEIGHT + 120,
    textAlign: 'center',
    opacity: 0.7,
    fontWeight: 400
  }
})
class NotFound extends Component {
  render() {
    const { classes: s } = this.props
    return (
      <Typography variant="title" className={s.root}>
        Oh no! It looks like that page doesn't exist :(
      </Typography>
    )
  }
}

export default withStyles(styles)(NotFound)
