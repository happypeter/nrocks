import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ChainIcon from '../svg/Chain'
import DAppIcon from '../svg/DApp'
import CryptoIcon from '../svg/Crypto'
import ContractIcon from '../svg/Contract'

const styles = theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('md')]: {
      width: 800,
      paddingTop: 0,
      paddingBottom: theme.spacing.unit * 4
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
    [theme.breakpoints.up('md')]: {
      width: 50,
      height: 50
    },
    [theme.breakpoints.up('lg')]: {
      width: 60,
      height: 60
    }
  }
})

class Cat extends Component {
  render() {
    const { classes: s } = this.props
    return (
      <div className={s.root}>
        <Grid container>
          <Grid item xs={3}>
            <ChainIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              区块链
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <DAppIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              DApp
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <ContractIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              智能合约
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <CryptoIcon className={s.icon} />
            <Typography variant="title" className={s.title}>
              密码学
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Cat)
