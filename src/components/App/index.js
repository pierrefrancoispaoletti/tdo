// == Import npm
import React, { useEffect, useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
// import Main from '../Main/Main';
import Title from '../Title/Title';
import Links from '../../datas/links';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

// == Import
import './app.scss';
import Main from '../Main/Main';
import BackHomeButton from '../BackHomeButton/BackHomeButton';

const App = () => {
  // cleaning the localStorage' on first rendering of
  // the app, in case the prices or the content have changed
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <BurgerMenu openMenu={openMenu} setOpenMenu={setOpenMenu}>
        <Title setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <Divider hidden />
        <Switch>
          <Route exact path="/">
            <Main />
            {/* <Redirect to="/cicchetteria" /> */}
          </Route>
          {Links.map((link) => (
            <Route
              key={link.name}
              path={link.slug}
              render={(props) => (
                <link.component
                  {...props}
                  endpoint={link.apiEndpoint}
                  title={link.title}
                  MenuComponent={link.menu}
                />
              )}
            />
          ))}
        </Switch>
        <Divider hidden />
        <Footer />
      </BurgerMenu>
      <BackHomeButton />
    </div>
  );
};

// == Export
export default App;
