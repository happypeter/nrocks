import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'
import { HEADER_HEIGHT, ACCENT_COLOR } from '../../constants/GlobalStyle'
import Footer from '../shared/Footer'
import HeroDiv from '../svg/HeroDiv'

const styles = theme => ({
  root: {
    marginTop: HEADER_HEIGHT,
    backgroundColor: '#fff',
    fontFamily: 'sans-serif'
  },
  header: {
    position: 'relative',
    backgroundColor: ACCENT_COLOR,
    backgroundImage: `linear-gradient(60deg, #4bda99, #3da274)`,
    padding: `${theme.spacing.unit * 4}px 0`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 8}px 0`
    }
  },
  container: {
    width: `calc(100% - 32px)`,
    padding: `${theme.spacing.unit * 6}px 0`,
    margin: `0 auto`,
    [theme.breakpoints.up('md')]: {
      width: 800
    },
    [theme.breakpoints.up('lg')]: {
      width: 1000
    },
    [theme.breakpoints.up('xl')]: {
      width: 1100
    }
  },
  hero: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 'auto',
    marginBottom: -1,
    width: '100%'
  },
  profile: {
    justifyContent: 'space-between'
  },
  avatar: {
    display: 'block',
    width: '100%',
    padding: 8
  },
  title: {
    fontSize: 22,
    color: '#212121',
    margin: '0 0 32px',
    textAlign: 'center',
    '&:after': {
      margin: '0 auto',
      content: '""',
      display: 'block',
      width: 36,
      height: 16,
      borderBottom: `3px solid ${ACCENT_COLOR}`
    }
  },
  author: {
    fontSize: 22,
    margin: '0 0 32px',
    color: '#fff',
    '&:after': {
      content: '""',
      display: 'block',
      width: 36,
      height: 16,
      borderBottom: `3px solid #fff`
    }
  },
  intro: {
    lineHeight: 2.6,
    fontSize: 14,
    color: '#fff'
  },
  text: {
    lineHeight: 2.2,
    fontSize: 14,
    opacity: 0.7
  },
  wrapper: {
    height: '100%',
    padding: '24px 0',
    position: 'relative',
    '&:before': {
      content: '" "',
      position: 'absolute',
      width: 2,
      top: 0,
      bottom: 0,
      left: '50%',
      marginLeft: -1,
      background: '#ececec'
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto 32px',
    fontSize: 14,
    opacity: 0.7
  },
  date: {
    color: ACCENT_COLOR
  },
  left: {
    padding: 16,
    width: '50%',
    textAlign: 'right',
    lineHeight: 2
  },
  right: {
    padding: 16,
    width: '50%',
    lineHeight: 2,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      width: 10,
      height: 10,
      border: '2px solid #fff',
      borderRadius: '50%',
      left: -5,
      top: '50%',
      marginTop: -4,
      background: ACCENT_COLOR
    }
  }
})

const About = props => {
  const { classes: s } = props
  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.container}>
          <Grid container spacing={32} className={s.profile}>
            <Grid item xs={12} sm={6}>
              <div className={s.author}>关于作者</div>
              <div className={s.intro}>
                王广忠，网名 happypeter，硕士，2006年开始进行 Linux Kernel
                开发，是开源运动的坚定支持者。Git
                版本控制工具的早期布道者，目前他的 GIthub 上有3.6K的 follower
                。曾就职于中科红旗与亚洲各国联合成立的 Asianux
                实验室，从事系统升级器的研发，使用过 C/C++/Python/PHP/Ruby/JS
                等多种编程语言，精通 RubyOnRails 和 React
                框架。好奇猫网络科技公司创始人兼 CTO
                ，2014年开始从事比特币全职工作，曾就职于云币网。
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2}>
                <img
                  className={s.avatar}
                  src="https://img.haoqicat.com/2018103102.jpg"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>

        <HeroDiv className={s.hero} />
      </div>

      <div className={s.container}>
        <div className={s.title}>关于本站</div>
        <div className={s.text}>
          这里是 Nervos 学习站。不仅提供 Nervos 相关的视频教程，也提供区块链
          DApp 开发相关的各种基础编程教程，涵盖密码学、React 和 JS 开发、Unix
          命令行和 Git 版本控制等。
        </div>
      </div>

      <div className={s.container}>
        <div className={s.title}>本站动态</div>
        <div className={s.wrapper}>
          <div className={s.item}>
            <div className={classNames(s.left, s.date)}>2018-09-21</div>
            <div className={s.right}>网站正式上线</div>
          </div>
          <div className={s.item}>
            <div className={s.left}>
              发布课程《基于 Nervos AppChain 的 DApp 开发》
            </div>
            <div className={classNames(s.right, s.date)}>2018-9-24</div>
          </div>
          <div className={s.item}>
            <div className={classNames(s.left, s.date)}>2018-10-24</div>
            <div className={s.right}>发布课程《区块链背后的密码学》</div>
          </div>
          <div className={s.item}>
            <div className={classNames(s.left, s.date)} />
            <div className={s.right}>持续更新中...</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default withStyles(styles)(About)
