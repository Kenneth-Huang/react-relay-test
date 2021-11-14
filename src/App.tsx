import React, {useState, useEffect} from 'react';
import './App.css';
import {  Route, Switch, useHistory } from 'react-router-dom';
import {
  RelayEnvironmentProvider,
} from 'react-relay';
import RelayEnvironment from './_helper/RelayEnv';
import { isLoggedIn , logout} from './_helper/auth'
import {NavBar, JobBoard, JobDetails, CompanyDetail, LoginForm} from './component/';
const { Suspense } = React;

function App(props: any) {
  let history = useHistory();
  const [loggedIn, setLooggedIn] = useState(false)
  useEffect(() => setLooggedIn(isLoggedIn()), []);

  const handleLogout = () => {
    logout();
    setLooggedIn(false);
    history.push('/');
  }
  return (
      <>
      <NavBar loggedIn={loggedIn} onLogout={ handleLogout}/>
        <section className="section">
          <div className="container">
            <Switch>
            <Route exact path="/" component={JobBoard} />
            <Route path="/jobs/:jobId" component={JobDetails} />
            <Route path="/companies/:companyId" component={CompanyDetail} />
            {/* <Route exact path="/login" component={LoginForm} /> */}
            <Route exact path="/login" render={(props) => <LoginForm setLooggedIn={setLooggedIn} history={props.history} />} />
            </Switch>
          </div>
        </section>
      </>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
