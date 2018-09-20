import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-static'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { MAX_WIDTH, HEADER_HEIGHT } from '../../constants/GlobalStyle'
import Footer from '../shared/Footer'

const styles = theme => ({
  header: {
    padding: `${theme.spacing.unit * 10}px 0`,
    backgroundColor: '#eff3f6',
    textAlign: 'center',
    fontSize: 24,
    marginTop: HEADER_HEIGHT
  },
  list: {
    width: '100%',
    maxWidth: MAX_WIDTH - 300,
    margin: '32px auto'
  },
  listItem: {
    display: 'block',
    textDecoration: 'none'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
})

class Course extends Component {
  render() {
    const { classes: s, episodes, course } = this.props
    return (
      <div>
        <div className={s.header}>
          <Typography variant="headline">{course.title}</Typography>
        </div>
        <div className={s.list}>
          {episodes.map(ep => (
            <Link
              to={`${course.id}/${ep.id}`}
              className={s.listItem}
              key={ep.id}
            >
              <Paper className={s.paper}>
                <Typography>{ep.title}</Typography>
              </Paper>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Course)
