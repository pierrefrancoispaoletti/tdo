import React, { useEffect } from 'react';
import PropTypes, { object } from 'prop-types';
import { Menu } from 'semantic-ui-react';

const VinsMenu = ({
  items, categories, setItemsByCategory, setCategories,
}) => {
  useEffect(() => {
    if (categories) {
      const newContenant = items.filter((item) => item.meta.Couleur.includes(categories));
      setItemsByCategory(newContenant);
    }
    else {
      setItemsByCategory(items);
    }
  }, [categories, items]);
  return (
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
};

VinsMenu.propTypes = {
  items: PropTypes.arrayOf(object.isRequired).isRequired,
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  setItemsByCategory: PropTypes.func.isRequired,
};

export default VinsMenu;
