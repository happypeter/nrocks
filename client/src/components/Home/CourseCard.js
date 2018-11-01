import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-static'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  date: {
    color: '#ffffff',
    width: 88,
    margin: '0 auto 8px',
    textAlign: 'center',
    backgroundColor: '#cccccc',
    padding: '2px 0',
    borderRadius: 4
  },
  link: {
    display: 'block',
    textDecoration: 'none'
  },
  action: {
    width: '100%'
  },
  media: {
    objectFit: 'cover'
  }
})

const CourseCard = ({ course, classes: s }) => (
  <Grid item xs={12} sm={6} lg={4} xl={4}>
    <Typography variant="body1" className={s.date}>
      {course.date}
    </Typography>

    <Link to={`/${course.id}`} className={s.link}>
      <Card className={s.card}>
        <CardActionArea className={s.action}>
          <CardMedia
            className={s.media}
            component="img"
            image={course.image}
            title={course.id}
          />
          <CardContent>
            <Typography gutterBottom variant="subheading">
              {course.title}
            </Typography>
            <Typography variant="caption">{course.desc}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  </Grid>
)

export default withStyles(styles)(CourseCard)
