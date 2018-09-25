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
      padding: theme.spacing.unit * 2,
      fontFamily: `Roboto, monospace`,
      overflow: 'auto',
      backgroundColor: '#fff',
      fontSize: 14
    },
    '& a': {
      color: '#00bcd4',
      fontStyle: 'normal',
      wordBreak: 'break-word'
    },
    '& img': {
      width: '100%',
      margin: '16px auto',
      display: 'block'
    },
    '& blockquote': {
      margin: 0,
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
      borderLeft: '4px solid #00bcd4',
      borderRadius: 3,
      backgroundColor: '#fff'
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
