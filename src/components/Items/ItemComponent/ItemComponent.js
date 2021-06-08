import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';

const ItemComponent = ({ item, setCategories }) => (
  <div className="itemelement">
    <Header as="h3" className="foodItems itemtitle" style={{ marginBottom: '0px' }}>
      <span style={{ display: 'inline-block', marginRight: '12px' }}>{item.title.rendered}</span>
      {item.meta.prix && <span>{item.meta.prix}<small>€</small></span>}
    </Header>
    <div className="foodItems itemdescription">
      {item.content.rendered && item.content.rendered.replace(/(<([^>]+)>)/gi, '')}
    </div>
    {item.meta.contenant !== undefined && (
      <>
        <span style={{ color: 'white', display: 'block' }}>
          {`${item.meta.contenant} `}
          {item.meta.Couleur !== undefined && (
          <span>
            {item.meta.Couleur.includes('Rouge') && (
            <FontAwesomeIcon
              icon={faWineBottle}
              style={{ color: '#C10501' }}
              size="lg"
              onClick={() => setCategories('Rouge')}
            />
            )}
            {item.meta.Couleur.includes('Blanc') && (
            <FontAwesomeIcon
              icon={faWineBottle}
              style={{ color: '#E8EA8D' }}
              size="lg"
              onClick={() => setCategories('Blanc')}
            />
            )}
            {item.meta.Couleur.includes('Rosé') && (
            <FontAwesomeIcon
              icon={faWineBottle}
              style={{ color: '#CF6021' }}
              size="lg"
              onClick={() => setCategories('Rosé')}
            />
            )}
          </span>
          )}
        </span>
      </>
    )}
  </div>
);

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
  setCategories: PropTypes.func.isRequired,
};

export default ItemComponent;
