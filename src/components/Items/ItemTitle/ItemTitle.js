import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import '../../../styles/items.scss';

const ItemTitle = ({ title }) => (
  <Header as="h1" textAlign="center" className="foodItems main__title title">
    {title}
    <Header.Subheader className="foodItems main__title info">
      {title === 'La Cicchetteria' ? 'de 17h a 21h' : ''}
    </Header.Subheader>
  </Header>
);

ItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ItemTitle;
