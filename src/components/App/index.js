// == Import npm
import React, { useEffect, useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import Main from '../Main/Main';
import Title from '../Title/Title';
import Links from '../../datas/links';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

// == Import
import './app.scss';

// == Composant
// @ TODO Ajouter un error handling au cas ou
// @ TODO tester les traductions avec React Auto Translate
// securiser la clé api
// @ TODO mettre en cache les données recupérées de l'api

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
        <Divider />
        <Switch>
          <Route exact path="/">
            <Main />
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
        <Divider />
        <Footer />
      </BurgerMenu>
    </div>
  );
};

// == Export
export default App;
