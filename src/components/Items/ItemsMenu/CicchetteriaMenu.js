import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const CicchetteriaMenu = ({
  categories,
  setCategories,
}) => (
  <Menu
    size="tiny"
    compact
    widths={3}
    className="menu__categories"
  >
    <Menu.Item
      name="toutes"
      active={categories === ''}
      onClick={() => {
        setCategories('');
      }}
    />
    <Menu.Item
      name="ce soir"
      active={categories === 'A la carte de soir'}
      onClick={() => {
        setCategories('A la carte de soir');
      }}
    />
    <Menu.Item
      name="la Truffe"
      active={categories === 'Le coin de la Truffe'}
      onClick={() => {
        setCategories('Le coin de la Truffe');
      }}
    />
  </Menu>
);

CicchetteriaMenu.propTypes = {
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default CicchetteriaMenu;
