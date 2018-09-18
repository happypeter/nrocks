import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#90999c',
    textAlign: 'center',
    padding: `${theme.spacing.unit * 9}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 9}px ${theme.spacing.unit}px`
  }
})

const Footer = props => {
  const { classes: s } = props
  return <div className={s.root}>Learning Nervos</div>
}

export default withStyles(styles)(Footer)
