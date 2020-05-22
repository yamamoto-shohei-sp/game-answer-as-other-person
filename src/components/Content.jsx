import React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Container } from '@material-ui/core'
import Top from './contents/Top'
import GameRoulette from './contents/GameRoulette'

/* Content */
const Content = () => {
  return (
    <Container component="main" maxWidth="xl" fixed>
      <Switch>
        {/* Pages of the common */}
        <Route exact path="/" component={Top} />
        <Route exact path="/game/roulette" component={GameRoulette} />

        <Route> 未実装ページかな？サービス対象外ページかな？ </Route>
      </Switch>
    </Container>
  )
}

export default Content
