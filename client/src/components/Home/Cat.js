import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ChainIcon from '../svg/Chain'
import DAppIcon from '../svg/DApp'
import CryptoIcon from '../svg/Crypto'
import NervosIcon from '../svg/Nervos'

const styles = theme => ({
  root: {
    padding: '16px 0 80px',
    display: 'flex',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: 800,
      margin: '0 auto'
    },
    [theme.breakpoints.up('lg')]: {
      width: 1000,
      margin: '0 auto'
    },
    [theme.breakpoints.up('xl')]: {
      width: 1100,
      margin: '0 auto'
    }
  }
})

class Cat extends Component {
  render() {
    const { classes: s } = this.props
    return (
      <div className={s.root}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={3} lg={3} xl={3}>
            <ChainIcon width={80} height={80} />
            <Typography variant="subheading">区块链</Typography>
          </Grid>
          <Grid item xs={6} sm={3} lg={3} xl={3}>
            <DAppIcon width={80} height={80} />
            <Typography variant="subheading">DApp</Typography>
          </Grid>
          <Grid item xs={6} sm={3} lg={3} xl={3}>
            <CryptoIcon width={80} height={80} />
            <Typography variant="subheading">密码学</Typography>
          </Grid>
          <Grid item xs={6} sm={3} lg={3} xl={3}>
            <NervosIcon width={80} height={80} />
            <Typography variant="subheading">Nervos</Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Cat)
