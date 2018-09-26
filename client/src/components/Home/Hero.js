import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import dashboardImg from '../../assets/images/dashboard.jpg'

const styles = theme => ({
  hero: {
    position: 'relative',
    height: 500,
    [theme.breakpoints.up('lg')]: {
      height: 650
    },
    [theme.breakpoints.up('xl')]: {
      height: 700
    },
    overflow: 'hidden'
  },
  bgShape: {
    position: 'absolute',
    backgroundImage: `linear-gradient(100deg, ${
      theme.palette.primary.main
    },#ffffff)`,
    borderRadius: '8%',
    width: '50%',
    top: -300,
    right: -110,
    height: 600,
    [theme.breakpoints.up('lg')]: {
      top: -350,
      right: -110,
      height: 800
    },
    transform: 'skew(3deg,30deg)',
    opacity: 1
  },
  bgCircle: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(100deg, ${theme.palette.primary.main}, ${
      theme.palette.primary.dark
    })`,
    opacity: 0.2,
    borderRadius: '100%',
    top: -200,
    left: -150,
    height: 400,
    width: 400,
    [theme.breakpoints.up('lg')]: {
      top: -300,
      left: -250,
      height: 600,
      width: 600
    },
    [theme.breakpoints.up('xl')]: {
      top: -400,
      left: -350,
      height: 800,
      width: 800
    }
  },
  bgCircleTwo: {
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `linear-gradient(100deg, ${theme.palette.primary.main}, ${
      theme.palette.primary.dark
    })`,
    borderRadius: '100%',
    opacity: 0.8,
    top: 100,
    left: 180,
    height: 60,
    width: 60,
    [theme.breakpoints.up('lg')]: {
      top: 150,
      left: 250,
      height: 80,
      width: 80
    },
    [theme.breakpoints.up('xl')]: {
      top: 150,
      left: 350,
      height: 100,
      width: 100
    }
  },
  content: {
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    position: 'absolute',
    top: 180,
    width: 800,
    left: '50%',
    marginLeft: -400,
    [theme.breakpoints.up('lg')]: {
      width: 1100,
      marginLeft: -550
    }
  },
  textWrap: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItem: 'center'
  },
  subheading: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  imgWrap: {
    width: 450,
    [theme.breakpoints.up('lg')]: {
      width: 600
    },
    '& img': {
      width: '100%'
    }
  }
})

class Hero extends React.Component {
  render() {
    const { classes: s, goto } = this.props
    return (
      <div className={s.hero}>
        <div className={s.content}>
          <div className={s.textWrap}>
            <div>
              <Typography variant="display2">Learning Nervos</Typography>
              <Typography className={s.subheading} variant="subheading">
                Peter 的踩坑实录，帮你节省自学时间。
              </Typography>
            </div>
          </div>
          <Paper className={s.imgWrap}>
            <img src={dashboardImg} alt="db" />
          </Paper>
        </div>
        <div className={s.bgShape} />
        <div className={s.bgCircle} />
        <div className={s.bgCircleTwo} />
      </div>
    )
  }
}

export default withStyles(styles)(Hero)
