import React from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    backgroundColor: '#0f1721',
    textAlign: 'center',
    padding: `${theme.spacing.unit * 9}px ${theme.spacing.unit}px ${theme
      .spacing.unit * 9}px ${theme.spacing.unit}px`,
    backgroundImage: `linear-gradient(180deg, #111c29, #111c29)`
  },
  title: {
    color: '#fff'
  }
})

const Footer = props => {
  const { classes: s } = props
  return (
    <div className={s.root}>
      <Typography variant="title" className={s.title}>
        见证下一代伟大公司的成长过程
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Footer)
