import React from 'react'
import keycode from 'keycode'
import compose from 'recompose/compose'
import EventListener from 'react-event-listener'
import PropTypes from 'prop-types'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import Input from '@material-ui/core/Input'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import { ACCENT_COLOR } from '../../constants/GlobalStyle'
import history from '../../utils/routerUtils'

let searchTimer
let initialized = false

function initDocsearch() {
  if (!process.browser) {
    return
  }

  clearInterval(searchTimer)
  searchTimer = setInterval(() => {
    const docsearchInput = document.querySelector('#docsearch-input')

    if (!window.docsearch || !docsearchInput) {
      return
    }

    if (initialized === docsearchInput) {
      clearInterval(searchTimer)
      return
    }

    initialized = docsearchInput
    clearInterval(searchTimer)
    window.docsearch({
      apiKey: '91fce6c04d7f68bbb346278719149541',
      indexName: 'nervos',
      inputSelector: '#docsearch-input',
      handleSelected: (input, event, suggestion) => {
        const url = suggestion.url
          .replace(/^https:\/\/learning\.nervos\.org/, '')
          .replace(/\/#/, '#')
          .replace(/\/$/, '')
        history.push(url)
      },
      // Set debug to true if you want to inspect the dropdown.
      debug: true
    })
  }, 100)
}

const styles = theme => ({
  '@global': {
    '.algolia-autocomplete': {
      fontFamily: theme.typography.fontFamily,
      '& .algolia-docsearch-suggestion--category-header': {
        fontWeight: 500,
        marginTop: 16
      },
      '& .algolia-docsearch-suggestion--category-header-lvl0': {
        fontSize: 14
      },
      '& .algolia-docsearch-suggestion .algolia-docsearch-suggestion--subcategory-column': {
        opacity: 1,
        padding: '5.33px 10.66px',
        textAlign: 'right',
        width: '30%',
        '&:before': {
          display: 'block'
        },
        '&:after': {
          display: 'none'
        },
        '& .algolia-docsearch-suggestion--subcategory-column-text': {
          fontSize: 14
        }
      },

      '& .algolia-docsearch-suggestion .algolia-docsearch-suggestion--content': {
        float: 'right',
        padding: '5.33px 0 5.33px 10.66px',
        width: '70%',
        '&:before': {
          display: 'block'
        }
      },
      '& .algolia-docsearch-suggestion--subcategory-column-text': {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightRegular
      },
      '& .algolia-docsearch-suggestion--highlight': {
        color: ACCENT_COLOR
      },
      '& .algolia-docsearch-suggestion': {
        background: 'transparent'
      },
      '& .algolia-docsearch-suggestion--title': {
        ...theme.typography.title,
        fontSize: 14
      },
      '& .algolia-docsearch-suggestion--text': {
        ...theme.typography.body1,
        wordBreak: 'break-word',
        '& .algolia-docsearch-suggestion--highlight': {
          color: ACCENT_COLOR,
          boxShadow: 'none'
        }
      },
      '& .ds-dropdown-menu': {
        boxShadow: theme.shadows[2],
        borderRadius: 2,
        minWidth: 288,
        maxWidth: 288,
        maxHeight: 400,
        overflow: 'scroll',
        [theme.breakpoints.up('sm')]: {
          minWidth: 500,
          maxWidth: 600,
          maxHeight: 'unset',
          overflow: 'auto'
        },
        '&::before': {
          display: 'none'
        },
        '& [class^=ds-dataset-]': {
          border: 0,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper
        }
      }
    }
  },
  root: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginLeft: theme.spacing.unit,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(`${ACCENT_COLOR}`, 0.8),
    '&:hover': {
      backgroundColor: ACCENT_COLOR
    },
    '& $inputInput': {
      transition: theme.transitions.create('width'),
      width: 0,
      [theme.breakpoints.up('sm')]: {
        width: 120
      },
      '&:focus': {
        width: 170,
        [theme.breakpoints.down('sm')]: {
          width: 100
        },
        paddingLeft: theme.spacing.unit * 5
      }
    }
  },
  search: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 4}px`,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 5
    }
  }
})

class AppSearch extends React.Component {
  inputRef = null

  handleKeyDown = event => {
    if (
      ['/', 's'].indexOf(keycode(event)) !== -1 &&
      document.activeElement.nodeName.toLowerCase() === 'body' &&
      document.activeElement !== this.inputRef
    ) {
      event.preventDefault()
      this.inputRef.focus()
    }
  }

  render() {
    const { classes } = this.props
    initDocsearch()
    return (
      <div className={classes.root}>
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
        <div className={classes.search}>
          <SearchIcon />
        </div>
        <Input
          disableUnderline
          placeholder="Search…"
          id="docsearch-input"
          inputRef={ref => {
            this.inputRef = ref
          }}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </div>
    )
  }
}

AppSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
}

export default compose(
  withStyles(styles),
  withWidth()
)(AppSearch)
