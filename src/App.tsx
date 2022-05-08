import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from 'layouts'
import Landing from 'pages/Landing';
import Mint from 'pages/Mint';
import Claim from 'pages/Claim';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [account, setAccount] = useState<any>(null);
  const [page, setPage] = useState(0);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Layout account={account} setAccount={setAccount} >
            <Route exact path='/'>
              <Landing account={account} />
            </Route>
            <Route exact path='/mint'>
              <Mint account={account} />
            </Route>
            <Route exact path='/claim'>
              <Claim account={account} />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  )
}

export default App