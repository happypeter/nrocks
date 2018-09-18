import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '25%'
  },
  book: {
    display: 'flex',
    width: '100%',
    height: 350,
    background: '#A7CBD0'
  },
  line: {
    width: 19,
    background: '#D47490',
    marginLeft: 14
  },
  cover: {
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    padding: '40px 0',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#353131'
  },
  pic: {
    display: 'flex',
    alignItems: 'center',
    width: 153,
    height: 153,
    background: '#fff',
    margin: '0 auto',
    borderRadius: '50%'
  },
  title: {
    textAlign: 'center'
  },
  id: {
    textAlign: 'center'
  }
})

class Books extends Component {
  render() {
    const { classes: s } = this.props
    return (
      <div className={s.root}>
        <div className={s.book}>
          <div className={s.line} />
          <div className={s.cover}>
            <div className={s.pic}>{/* <img src={imgUrl} /> */}</div>
            <h2 className={s.title}>book</h2>
            <span className={s.id}>BookId: 1</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Books)
