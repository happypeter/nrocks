import React from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    background: '#90999c',
    textAlign: 'center',
    padding: `${theme.spacing.unit * 9}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 9}px ${theme.spacing.unit}px`
  }
})

const Footer = props => {
  const { classes: s } = props
  return (
    <div className={s.root}>
      <Typography variant="title">见证下一代伟大公司的成长过程</Typography>
    </div>
  )
}

export default withStyles(styles)(Footer)
