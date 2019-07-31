import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Admin from './admin'
import DemoOne from './pages/demo/one'
import DemoTwo from './pages/demo/two'
import DemoThree from './pages/demo/three';
import DemoFour from './pages/demo/four';
import DemoFive from './pages/demo/five';
import DemoSix from './pages/demo/six';
import DemoSeven from './pages/demo/seven';
import DemoEight from './pages/demo/eight';
import DemoNine from './pages/demo/nine';
import DemoTen from './pages/demo/ten';
import DemoEleven from './pages/demo/eleven';
import DemoTwelve from './pages/demo/twelve';
import DemoThirteen from './pages/demo/thirteen';

export default class IRouter extends React.Component{
  render() {
    return (
      <HashRouter>
        <App>
          <Admin>
            <Route path="/demo" render={
              () => 
                <Switch>
                  <Route path="/demo/one" component={DemoOne}></Route>
                  <Route path="/demo/two" component={DemoTwo}></Route>
                  <Route path="/demo/three" component={DemoThree}></Route>
                  <Route path="/demo/four" component={DemoFour}></Route>
                  <Route path="/demo/five" component={DemoFive}></Route>
                  <Route path="/demo/six" component={DemoSix}></Route>
                  <Route path="/demo/seven" component={DemoSeven}></Route>
                  <Route path="/demo/eight" component={DemoEight}></Route>
                  <Route path="/demo/nine" component={DemoNine}></Route>
                  <Route path="/demo/ten" component={DemoTen}></Route>
                  <Route path="/demo/eleven" component={DemoEleven}></Route>
                  <Route path="/demo/twelve" component={DemoTwelve}></Route>
                  <Route path="/demo/thirteen" component={DemoThirteen}></Route>
                </Switch>}>
            </Route>
          </Admin>
          
        </App>
      </HashRouter>
    )
  }
}