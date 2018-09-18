import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { MAX_WIDTH } from '../../constants/GlobalStyle'

const styles = theme => ({
  hero: {
    textAlign: 'center',
    backgroundColor: '#eff3f6',
    padding: theme.spacing.unit * 10
  },
  content: {
    padding: theme.spacing.unit * 2,
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: '24px auto'
  },
  listWrap: {
    [theme.breakpoints.up('md')]: {
      width: 700,
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

class Home extends React.Component {
  render() {
    const { classes: s } = this.props
    return (
      <div>
        <div className={s.hero}>Nervos 图书馆</div>
        <div className={s.content}>
          <div className={s.listWrap}>home page</div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
