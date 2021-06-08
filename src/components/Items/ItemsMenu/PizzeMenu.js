import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const PizzeMenu = ({
  categories, setCategories,
}) => (
  <Menu size="tiny" compact widths={3} className="menu__categories">
    <Menu.Item
      name="toutes"
      active={categories === ''}
      onClick={() => {
        setCategories('');
      }}
    />
    <Menu.Item
      name="crèatives"
      active={categories === 'Les créatives'}
      onClick={() => {
        setCategories('Les créatives');
      }}
    />
    <Menu.Item
      name="classiques"
      active={categories === 'Les classiques'}
      onClick={() => {
        setCategories('Les classiques');
      }}
    />
  </Menu>
);

PizzeMenu.propTypes = {
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default PizzeMenu;
