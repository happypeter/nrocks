import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ChainIcon from '../svg/Chain'
import DAppIcon from '../svg/DApp'
import CryptoIcon from '../svg/Crypto'
import NervosIcon from '../svg/Nervos'
import { HEADER_HEIGHT } from '../../constants/GlobalStyle'

const styles = theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 6}px 0`,
    [theme.breakpoints.up('md')]: {
      width: 800,
      paddingTop: 0
    },
    [theme.breakpoints.up('lg')]: {
      width: 1000
    },
    [theme.breakpoints.up('xl')]: {
      width: 1100
    }
  },
  title: {
    opacity: 0.7,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    fontSize: 16
  },
  icon: {
    width: 40,
    height: 40,
    [theme.breakpoints.up('lg')]: {
      width: 60,
      height: 60
    },
    [theme.breakpoints.up('xl')]: {
      width: 80,
      height: 80
    }
  }
})

class Cat extends Component {
  render() {
    const { classes: s } = this.props
    return (
      <div className={s.root}>
        <Grid container>
          <Grid item xs={6} sm={3}>
            <ChainIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              区块链
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <DAppIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              DApp
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <CryptoIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              密码学
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <NervosIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              Nervos 实战
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Cat)
