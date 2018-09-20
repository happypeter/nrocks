import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-static'

const styles = theme => ({
  card: {
    cursor: 'pointer',
    margin: theme.spacing.unit * 2
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    borderBottom: '1px solid #ececec'
  }
})

class CourseCard extends React.Component {
  render() {
    const { course, classes: s } = this.props
    return (
      <Link to={`/${course.id}`}>
        <Card className={s.card}>
          <CardMedia image="/petercoin.svg" className={s.media} />
          <CardContent>
            <Typography>{course.title}</Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }
}

export default withStyles(styles)(CourseCard)
