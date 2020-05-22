import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Typography,
  TextField,
  Grid,
  IconButton
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DoneAll from '@material-ui/icons/DoneAll'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto'
  },
  paper: {
    width: 400,
    overflow: 'auto',
    margin: theme.spacing(1, 0)
  },
  button: {
    margin: theme.spacing(0.5, 0)
  },
  margin: {
    margin: theme.spacing(1)
  }
}))

/* SettingList */
const SettingList = ({
  title,
  targetList,
  setTargetList,
  selectList,
  setSelectList
}) => {
  const classes = useStyles()
  const [addItem, setAddItem] = React.useState('')
  const handleDenyAllButton = () => {
    const handleList = [...targetList]
    setSelectList(handleList)
  }
  const handleAddButton = () => {
    const handleList = [...targetList]
    if (addItem && handleList.indexOf(addItem) === -1) {
      handleList.push(addItem)
    }
    setTargetList(handleList)
    setAddItem('')
  }
  const handleClick = (event, value) => {
    const handleList = [...selectList]
    if (event.target.checked) {
      if (handleList.indexOf(value) === -1) {
        handleList.push(value)
      }
    } else {
      if (handleList.indexOf(value) > -1) {
        handleList.splice(handleList.indexOf(value), 1)
      }
    }
    setSelectList(handleList)
  }
  return (
    <Paper className={classes.paper}>
      <Typography component="h2" variant="subtitle1">
        {title}
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <IconButton className={classes.margin} onClick={handleDenyAllButton}>
            <DoneAll fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item xs={7}>
          <TextField
            label="Add item."
            variant="filled"
            fullWidth
            value={addItem}
            onChange={event => setAddItem(event.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <IconButton className={classes.margin} onClick={handleAddButton}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <List dense component="div" role="list">
        {targetList.map(value => {
          return (
            <ListItem key={value} role="listitem" button>
              <ListItemIcon>
                <Checkbox
                  disableRipple
                  onClick={event => handleClick(event, value)}
                  checked={selectList.indexOf(value) > -1}
                />
              </ListItemIcon>
              <ListItemText
                id={`transfer-list-item-${value}-label`}
                primary={value}
              />
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}

SettingList.propTypes = {
  title: PropTypes.string,
  targetList: PropTypes.array,
  setTargetList: PropTypes.func,
  selectList: PropTypes.array,
  setSelectList: PropTypes.func
}

export default withRouter(SettingList)
