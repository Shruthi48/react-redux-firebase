import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)} >
 <MuiThemeProvider muiTheme={getMuiTheme()}>
  <BrowserRouter>
    <Switch>
      <Route path='/Login' component={Login}/>
      <Route path='/CreateAccount' component={CreateAccount}/>
      <Route path='/' component={App}/>
    </Switch>
  </BrowserRouter>
 </MuiThemeProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
