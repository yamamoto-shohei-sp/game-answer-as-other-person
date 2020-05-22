import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Paper,
  Typography,
  CircularProgress,
  Fab,
  Grid
} from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto'
  },
  paper: {
    width: 800,
    overflow: 'auto',
    margin: theme.spacing(1, 0)
  },
  button: {
    margin: theme.spacing(0.5, 0)
  },
  margin: {
    margin: theme.spacing(1)
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  }
}))

/* Roulette */
const Roulette = ({ title, selectList }) => {
  const classes = useStyles()
  const [onSelect, setOnSelect] = React.useState(false)
  const [selectInterval, setSelectInterval] = React.useState()
  const [selectIndex, setSelectIndex] = React.useState(0)
  const sleep = (someFunction, wait) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(someFunction())
      }, wait)
    })
  }

  const handleStart = async () => {
    setOnSelect(true)
    setSelectInterval(
      setInterval(() => {
        setSelectIndex(Math.floor(Math.random() * selectList.length))
      }, 50)
    )
  }
  const handleStop = async () => {
    clearInterval(selectInterval)
    let sleeptime = 50
    for (let i = 0; i < 7; i++) {
      sleeptime += 50 * i
      console.log(sleeptime)
      await sleep(() => {
        console.log(selectIndex)
      }, sleeptime)
      setSelectIndex(Math.floor(Math.random() * selectList.length))
    }
    setOnSelect(false)
  }
  return (
    <Paper className={classes.paper}>
      <Typography component="h2" variant="subtitle1">
        {title}
      </Typography>

      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStart}
            disabled={onSelect || !selectList.length}
            fullWidth
          >
            Start
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleStop}
            disabled={!onSelect}
            fullWidth
          >
            Stop
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Typography component="h2" variant="h3">
            {selectList[selectIndex]}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Fab color="extended" disabled>
            {onSelect ? <AutorenewOutlinedIcon /> : <CheckOutlinedIcon />}
            {onSelect && (
              <CircularProgress size={68} className={classes.fabProgress} />
            )}
          </Fab>
        </Grid>
      </Grid>
    </Paper>
  )
}

Roulette.propTypes = {
  title: PropTypes.string,
  selectList: PropTypes.array,
  setSelectList: PropTypes.func
}

export default withRouter(Roulette)
