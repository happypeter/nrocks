import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-static'

const styles = theme => ({
  root: {
    width: '25%',
    padding: theme.spacing.unit * 2,
    textDecoration: 'none'
  },
  book: {
    display: 'flex',
    width: '100%',
    height: 350,
    background: '#A7CBD0'
  },
  line: {
    width: 19,
    background: '#D47490',
    marginLeft: 14
  },
  cover: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    padding: '40px 0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#353131'
  },
  pic: {
    display: 'flex',
    alignItems: 'center',
    width: 153,
    height: 153,
    background: '#fff',
    margin: '0 auto',
    borderRadius: '50%'
  },
  title: {
    textAlign: 'center'
  }
})

class CourseCard extends Component {
  render() {
    const { classes: s, course } = this.props
    return (
      <Link className={s.root} to={course.id}>
        <div className={s.book}>
          <div className={s.line} />
          <div className={s.cover}>
            <div className={s.pic} />
            <h2 className={s.title}>{course.title}</h2>
          </div>
        </div>
      </Link>
    )
  }
}

export default withStyles(styles)(CourseCard)
