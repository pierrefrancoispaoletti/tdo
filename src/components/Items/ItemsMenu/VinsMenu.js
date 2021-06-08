import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const VinsMenu = ({
  categories, setCategories,
}) => (
  <Menu size="mini" compact widths={4} className="menu__categories">
    <Menu.Item
      name="toutes"
      active={categories === ''}
      onClick={() => {
        setCategories('');
      }}
    />
    <Menu.Item
      name="Rouge"
      active={categories === 'Rouge'}
      onClick={() => {
        setCategories('Rouge');
      }}
    />
    <Menu.Item
      name="Blanc"
      active={categories === 'Blanc'}
      onClick={() => {
        setCategories('Blanc');
      }}
    />
    <Menu.Item
      name="Rosé"
      active={categories === 'Rosé'}
      onClick={() => {
        setCategories('Rosé');
      }}
    />
    {/* <Menu.Item
        name="50Cl"
        active={categories === 'Les 50cl'}
        onClick={() => {
          setCategories('Les 50cl');
          filterObjectsByContenant(items, '50 cl');
        }}
      /> */}
  </Menu>
);

VinsMenu.propTypes = {
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default VinsMenu;
