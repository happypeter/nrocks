import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { ACCENT_COLOR } from '../../constants/GlobalStyle'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import '../../assets/themes/prism.css'

const uslug = require('uslug')
const md = require('markdown-it')({
  linkify: true,
  highlight: function(str, language) {
    const lang = language || 'javascript'
    if (lang) {
      try {
        return Prism.highlight(str, Prism.languages[lang], lang)
      } catch (__) {}
    }
    return ''
  }
}).use(require('markdown-it-anchor'), {
  permalink: true,
  slugify: s => uslug(s)
})

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    fontFamily: `'Helvetica Neue',Helvetica,Arial,Sans-serif`,
    lineHeight: 1.9,
    fontSize: 16,
    '& h2': {
      fontSize: '1.3125rem',
      color: 'rgba(0, 0, 0, 0.87)',
      fontWeight: 500,
      marginTop: theme.spacing.unit * 5,
      '&:before': {
        content: '""',
        display: 'block',
        height: 91,
        marginTop: -91,
        visibility: 'hidden'
      },
      '& $a': {
        visibility: 'hidden'
      },
      '&:hover $a': {
        cursor: 'pointer',
        visibility: 'visible',
        textDecoration: 'none'
      }
    },
    '& pre': {
      padding: theme.spacing.unit * 3,
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
      color: 'rgba(0, 0, 0, 0.75)',
      wordBreak: 'break-word'
    }
  }
})

class Doc extends Component {
  render() {
    const { classes: s, markdown } = this.props
    const result = md.render(markdown)
    return (
      <div dangerouslySetInnerHTML={{ __html: result }} className={s.root} />
    )
  }
}

export default withStyles(styles)(Doc)
