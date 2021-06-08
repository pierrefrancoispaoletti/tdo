/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  List,
} from 'semantic-ui-react';

import './footer.scss';
import '../../styles/items.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <Container className="footer__container">
    <Grid columns={2} divided>
      <GridRow>
        <GridColumn>
          <List>
            <List.Item>
              <List.Header className="footer__container__header main__title itemtitle">
                Contact
              </List.Header>
              <Divider hidden />
              <List.Content>
                <a href="mailto:vannina.giorgi@hotmail.fr">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </List.Content>
            </List.Item>
          </List>
        </GridColumn>
        <GridColumn>
          <List>
            <List.Item>
              <List.Header className="footer__container__header main__title itemtitle">
                Suivez nous
              </List.Header>
              <Divider hidden />
              <List.Content floated="right">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/TDO-le-temps-des-oliviers-128901417192735"
                >
                  <List.Icon name="facebook" color="blue" size="big" link />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/le_temps_des_oliviers/?hl=fr"
                >
                  <List.Icon name="instagram" color="purple" size="big" link />
                </a>
              </List.Content>
            </List.Item>
          </List>
        </GridColumn>
      </GridRow>
    </Grid>
    <Grid>
      <GridRow className="footer__container__header" centered>
        {' '}
        ©opyright Le Temps des Oliviers
      </GridRow>
    </Grid>
  </Container>
);

export default Footer;
