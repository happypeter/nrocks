import React from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import LogoIcon from '../svg/Logo'
import { ACCENT_COLOR } from '../../constants/GlobalStyle'
import { Link } from 'react-static'

const styles = theme => ({
  root: {
    backgroundColor: '#ffffff',
    padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme
      .spacing.unit * 9}px ${theme.spacing.unit * 2}px`
  },
  container: {
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
    width: '100%',
    maxWidth: 300
  },
  caption: {
    marginTop: theme.spacing.unit * 3,
    color: '#212121',
    opacity: 0.7
  },
  link: {
    color: ACCENT_COLOR
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
      </div>
    </div>
  )
}

export default withStyles(styles)(Footer)
