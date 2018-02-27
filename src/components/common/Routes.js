import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../Home'
import AddMovie from '../AddMovie'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/movie/add' component={AddMovie} />
  </Switch>
)

export default Routes
