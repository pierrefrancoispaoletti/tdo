import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const BoissonsMenu = ({ categories, setCategories }) => (
  <Menu size="mini" widths={5} className="menu__categories">
    <Menu.Item
      name="toutes"
      active={categories === ''}
      onClick={() => {
        setCategories('');
      }}
    />
    <Menu.Item
      name="Alcools"
      active={categories === 'Alcools'}
      onClick={() => {
        setCategories('Alcools');
      }}
    />
    <Menu.Item
      name="Spiritueux"
      active={categories === 'Spiritueux'}
      onClick={() => {
        setCategories('Spiritueux');
      }}
    />
    <Menu.Item
      name="Bières"
      active={categories === 'Bières'}
      onClick={() => {
        setCategories('Bières');
      }}
    />
    <Menu.Item
      name="Divers"
      active={categories === 'Divers'}
      onClick={() => {
        setCategories('Divers');
      }}
    />
  </Menu>
);

BoissonsMenu.propTypes = {
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default BoissonsMenu;
