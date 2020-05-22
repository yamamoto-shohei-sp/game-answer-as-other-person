import React from 'react'
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

/* Top */
const Top = props => {
  const classes = useStyles()
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.margin}
        size="large"
        onClick={() => {
          props.history.push('/game/roulette')
        }}
      >
        ルーレット
      </Button>
    </div>
  )
}

export default withRouter(Top)
