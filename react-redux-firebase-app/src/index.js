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

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)} >
  <BrowserRouter>
    <Switch>
      <Route path='/Login' component={Login}/>
      <Route path='/CreateAccount' component={CreateAccount}/>
      <Route path='/' component={App}/>
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
