import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles } from '@material-ui/core/styles'
import { ACCENT_COLOR } from '../../constants/GlobalStyle'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    fontFamily: `'Helvetica Neue',Helvetica,Arial,Sans-serif`,
    lineHeight: 1.9,
    fontSize: 16,
    '& h2': {
      fontSize: '1.4em',
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 500,
      marginTop: theme.spacing.unit * 5
    },
    '& pre': {
      padding: theme.spacing.unit * 2,
      fontFamily: `Roboto, monospace`,
      overflow: 'auto',
      backgroundColor: '#fff',
      fontSize: 14
    },
    '& a': {
      color: ACCENT_COLOR,
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
      borderLeft: `4px solid ${ACCENT_COLOR}`,
      borderRadius: 3,
      backgroundColor: '#fff'
    },
    '& p': {
      color: 'rgba(0, 0, 0, 0.75)'
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
