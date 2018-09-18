import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Header from './Header'
import Footer from '../shared/Footer'

const styles = theme => ({
  root: {},
  content: {
    backgroundColor: theme.palette.background.default
  }
})

class Layout extends React.Component {
  componentDidMount() {}

  render() {
    const { children, classes: s } = this.props

    return (
      <div className={s.root}>
        <Header />
        <div className={classNames(s.content)}>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Layout)
