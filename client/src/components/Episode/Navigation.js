import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-static'
import ArrowBackIcon from '../svg/ArrowBack'
import ArrowForwardIcon from '../svg/ArrowForward'

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 6,
    justifyContent: 'space-between'
  },
  nav: {
    width: '48%',
    maxWidth: 320,
    justifyContent: 'space-between'
  },
  icon: {
    color: 'rgba(33,33,33,.8)'
  }
})

class Navigation extends Component {
  render() {
    const { episodes, episodeId, courseId, classes: s } = this.props
    const index = episodes.findIndex(el => el.id === episodeId)

    const previous = index === 0 ? null : episodes[index - 1]
    const next =
      index === episodes.length || index + 1 === episodes.length
        ? null
        : episodes[index + 1]

    const prevLink = props => (
      <Link to={`/${courseId}/${previous.id}`} {...props} />
    )
    const nextLink = props => <Link to={`/${courseId}/${next.id}`} {...props} />
    return (
      <div className={s.root}>
        {!previous ? null : (
          <Button component={prevLink} variant="contained" className={s.nav}>
            <ArrowBackIcon className={s.icon} />
            <Typography variant="body1">{previous.title}</Typography>
          </Button>
        )}

        {!next ? null : (
          <Button component={nextLink} variant="contained" className={s.nav}>
            <Typography variant="body1">{next.title}</Typography>
            <ArrowForwardIcon className={s.icon} />
          </Button>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Navigation)
