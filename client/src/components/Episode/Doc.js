import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    fontFamily: `'Helvetica Neue',Helvetica,Arial,Sans-serif`,
    lineHeight: 1.9,
    fontSize: 16,
    '& h2': {
      fontSize: 20
    },
    '& pre': {
      border: `2px solid ${theme.palette.primary.light}`,
      padding: theme.spacing.unit,
      fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
      overflow: 'auto'
    },
    '& a': {
      color: '#00bcd4',
      fontStyle: 'normal'
    },
    '& img': {
      width: '100%',
      maxWidth: 600,
      margin: '16px auto',
      display: 'block'
    }
  }
})

class Doc extends Component {
  render() {
    const { classes: s, markdown } = this.props
    return <ReactMarkdown source={markdown} className={s.root} />
  }
}

export default withStyles(styles)(Doc)
