import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { HEADER_HEIGHT } from '../constants/GlobalStyle'

const styles = theme => ({
  root: {
    marginTop: HEADER_HEIGHT + 120,
    textAlign: 'center',
    opacity: 0.7,
    fontWeight: 400,
    padding: `0 ${theme.spacing.unit * 2}px`
  }
})

const NotFound = ({ classes: s }) => (
  <Typography variant="title" className={s.root}>
    页面不存在 :(
  </Typography>
)

export default withStyles(styles)(NotFound)
