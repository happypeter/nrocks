import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import posterImg from '../../assets/images/poster.png'
import LogoOnly from '../svg/LogoOnly'
import { ACCENT_COLOR } from '../../constants/GlobalStyle'

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
    overflow: 'hidden',
    backgroundColor: '#ffffff'
  },
  bgShape: {
    position: 'absolute',
    backgroundColor: ACCENT_COLOR,
    backgroundImage: `linear-gradient(100deg, ${ACCENT_COLOR}, #ffffff)`,
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
    backgroundColor: ACCENT_COLOR,
    backgroundImage: `linear-gradient(100deg, #84e8bb, #45c289)`,
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
    backgroundColor: ACCENT_COLOR,
    backgroundImage: `linear-gradient(100deg, #84e8bb, #45c289)`,
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
      width: 1000,
      marginLeft: -500
    },
    [theme.breakpoints.up('xl')]: {
      width: 1100,
      marginLeft: -550
    }
  },
  left: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex'
  },
  link: {
    color: ACCENT_COLOR,
    textDecoration: 'none'
  },
  headline: {
    display: 'flex'
  },
  siteTitle: {
    lineHeight: '50px',
    marginLeft: '8px'
  },
  caption: {
    marginLeft: 58,
    marginTop: theme.spacing.unit,
    opacity: 0.7,
    maxWidth: 340
  },
  imgWrap: {
    marginLeft: theme.spacing.unit * 4,
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
    const { classes: s } = this.props
    return (
      <div className={s.hero}>
        <div className={s.content}>
          <div className={s.left}>
            <div>
              <div className={s.headline}>
                <LogoOnly className={s.nlogo} width={50} height={50} />
                <Typography className={s.siteTitle} variant="headline">
                  Nervos 学习站
                </Typography>
              </div>
              <Typography className={s.caption} variant="body2">
                Nervos AppChain
                是一个帮助企业搭建应用的链，本站视频课程服务开发者，目的在于帮助大家迅速掌握区块链基础知识并上手
                AppChain 相关应用开发。
              </Typography>
            </div>
          </div>
          <div className={s.imgWrap}>
            <img src={posterImg} alt="poster" />
          </div>
        </div>
        <div className={s.bgShape} />
        <div className={s.bgCircle} />
        <div className={s.bgCircleTwo} />
      </div>
    )
  }
}

export default withStyles(styles)(Hero)
