import React from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import LogoIcon from '../svg/Logo'
import { ACCENT_COLOR } from '../../constants/GlobalStyle'
import { Link } from 'react-static'

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 9}px ${theme.spacing.unit * 2}px`,
    fontFamily: 'sans-serif'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: `1px solid ${ACCENT_COLOR}`,
    width: '100%',
    margin: `${theme.spacing.unit * 4}px auto 0`,
    padding: `${theme.spacing.unit * 4}px 0 0`,
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
  column: {
    maxWidth: 300
  },
  column1: {
    flexShrink: 0
  },
  caption: {
    marginTop: theme.spacing.unit * 3,
    color: '#212121',
    opacity: 0.7
  },
  link: {
    color: ACCENT_COLOR,
    fontWeight: 600
  },
  about: {
    color: ACCENT_COLOR,
    fontWeight: 500,
    textDecoration: 'none',
    fontSize: 16,
    display: 'block',
    height: '46.86px',
    lineHeight: '46.86px'
  }
})

const Footer = props => {
  const { classes: s } = props
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.column}>
          <Link to="/">
            <LogoIcon width={120} />
          </Link>
          <Typography variant="caption" className={s.caption}>
            欢迎来到 Nervos
            学习站，除非另行特定说明，本站所有文字内容，以及相关视频按照{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              className={s.link}
            >
              CC-SA 协议
            </a>
            发布。
          </Typography>
        </div>
        <div className={s.column1}>
          <Link to="/about" className={s.about}>
            关于
          </Link>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Footer)
