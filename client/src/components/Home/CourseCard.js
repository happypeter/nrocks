import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-static'

const styles = theme => ({
  root: {
    margin: -theme.spacing.unit * 2
  },
  inner: {
    margin: theme.spacing.unit * 2
  },
  dateWrapper: {
    width: 88,
    margin: '0 auto 8px',
    textAlign: 'center',
    backgroundColor: '#cccccc',
    padding: '2px 0',
    borderRadius: 4
  },
  date: {
    color: '#ffffff'
  },
  link: {
    display: 'block',
    textDecoration: 'none'
  },
  button: {
    width: '100%'
  },
  media: {
    objectFit: 'cover'
  }
})

class CourseCard extends React.Component {
  render() {
    const { course, classes: s } = this.props
    return (
      <div className={s.root}>
        <div className={s.inner}>
          <div className={s.dateWrapper}>
            <Typography variant="body1" className={s.date} component="div">
              {course.date}
            </Typography>
          </div>
          <Link to={`/${course.id}`} className={s.link}>
            <Card className={s.card}>
              <CardActionArea className={s.button}>
                <CardMedia
                  className={s.media}
                  component="img"
                  image={course.image}
                  title={course.id}
                />
                <CardContent>
                  <Typography gutterBottom variant="subheading" component="h3">
                    {course.title}
                  </Typography>
                  <Typography variant="caption" component="p">
                    {course.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CourseCard)
