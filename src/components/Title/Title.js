import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
} from 'semantic-ui-react';
import logo from './T13.png';
import element from './T17.png';

import './title.scss';

const Title = ({ openMenu, setOpenMenu }) => (
  <Container className="title__container" style={{ position: 'relative' }}>
    <Grid columns={2}>
      <GridRow>
        <GridColumn>
          <Link to="/">
            <Header as="h1" color="grey">
              <img
                loading="lazy"
                src={element}
                alt="element"
                width="100%"
                style={{
                  position: 'absolute',
                  zIndex: '49',
                  top: '-20px',
                  left: '-20px',
                  maxWidth: '180px',
                  width: '100%',
                }}
              />
              <img
                loading="lazy"
                src={logo}
                alt="logo"
                width="80px"
                height="80px"
                style={{
                  position: 'absolute',
                  zIndex: '50',
                  top: '-10px',
                  left: '-10px',
                }}
              />
            </Header>
          </Link>
        </GridColumn>
        <GridColumn textAlign="right" verticalAlign="middle">
          <a target="_blank" href="https://admin.le-tdo.com" rel="noreferrer">
            <Button
              icon={{ name: 'user' }}
              size="huge"
              className="buttonItems"
              circular
            />
          </a>
          <Button
            icon={{ name: 'bars' }}
            size="huge"
            className={`buttonItems pulse ${!openMenu ? 'menuReverse' : ''}`}
            circular
            onClick={() => setOpenMenu(!openMenu)}
          />
        </GridColumn>
      </GridRow>
    </Grid>
  </Container>
);

Title.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};

export default Title;
