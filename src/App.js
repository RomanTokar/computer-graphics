import React, {useEffect, useState} from 'react';
import {AppBar, Grid, Tab, Tabs} from '@material-ui/core';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';

import Logo from './components/Logo';
import {Link} from 'react-router-dom';
import routes from './pages/routes';

const App = () => {
  const location = useLocation();
  const [value, setValue] = useState('/home');

  useEffect(() => {
    const {pathname} = location;
    const isRouteExist = !!routes.filter((r => r.path === pathname)).length;

    if (isRouteExist) {
      setValue(pathname);
    }
  }, [location]);

  return (
    <>
      <AppBar position={'static'} style={{padding: '10px 40px', background: '#25649D'}}>
        <Grid container alignItems={'center'}>
          <Grid item lg={7} md={9} sm={10} xs={11}>
            <Tabs value={value} variant={'fullWidth'}>
              {routes.map(({path, label}) => (
                <Tab key={path} component={Link} value={path} to={path} label={label}/>
              ))}
            </Tabs>
          </Grid>
          <Grid item lg={4} md={2} sm={1}/>
          <Grid item container justify={'center'} lg={1} md={1} sm={1} xs={1}>
            <Grid item>
            <Logo/>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <main style={{margin: '30px 60px'}}>
        <Switch>
          {routes.map(({path, component}) => (
            <Route key={path} path={path} component={component}/>
          ))}
          <Redirect to={'/home'}/>
        </Switch>
      </main>
    </>
  );
};

export default App;