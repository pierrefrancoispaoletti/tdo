import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Divider, Transition } from 'semantic-ui-react';
import { axiosCall } from '../../../utils/axiosCalls';
import { filterObjectsByCategory, compareObjects } from '../../../utils/utils';

import LoaderComponent from '../../Loader/Loader';
import ItemComponent from '../ItemComponent/ItemComponent';
import ItemTitle from '../ItemTitle/ItemTitle';
import divider from './T7.png';
import element from './T1.png';

const ItemElement = ({ endpoint, title, MenuComponent }) => {
  const [mounted, setMounted] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState('');
  const [itemsCategory, setItemsByCategory] = useState([]);

  useEffect(() => {
    setCategories('');
    setItemsByCategory([]);
  }, [endpoint]);

  useEffect(() => {
    if (
      categories === 'Rouge'
      || categories === 'Blanc'
      || categories === 'Rosé'
    ) {
      const newContenant = items.filter((item) => item.meta.Couleur.includes(categories));
      setItemsByCategory(newContenant);
    }
    else if (
      categories === 'A la carte de soir'
      || categories === 'Le coin de la Truffe'
      || categories === 'Alcools'
      || categories === 'Spiritueux'
      || categories === 'Bières'
      || categories === 'Les créatives'
      || categories === 'Les classiques'
    ) {
      filterObjectsByCategory(items, categories, setItemsByCategory);
    }
    else if (categories === 'Divers') {
      filterObjectsByCategory(items, 'zdivers', setItemsByCategory);
    }
    else {
      setItemsByCategory(items);
    }
  }, [categories, items]);

  useEffect(() => {
    setMounted(true);
    setLoading(true);
    const cachedItems = JSON.parse(localStorage.getItem(endpoint));
    if (cachedItems) {
      if (!mounted) {
        setItems(
          cachedItems.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
        );
        setItemsByCategory(
          cachedItems.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
        );
        setLoading(false);
      }
    }
    else {
      axiosCall(endpoint).then((response) => {
        const AllItems = response.data;
        if (!mounted) {
          setItems(
            AllItems.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
          );
          setItemsByCategory(
            AllItems.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
          );
          localStorage.setItem(endpoint, JSON.stringify(AllItems));
          setLoading(false);
        }
      });
    }
    return function cleanup() {
      setMounted(false);
    };
  }, []);
  return (
    <Transition visible={mounted} animation="fly left" duration={1000}>
      <Container>
        <ItemTitle title={title} />
        <Divider hidden />
        {title === 'La Cicchetteria' && (
          <p style={{ color: '#D8CDA0' }}>
            D'origine italienne. Il s'agit de petits plats d'accompagnement ou
            de petites collations, souvent accompagnés d'un petit verre de Vin.
          </p>
        )}
        {MenuComponent !== undefined && (
          <MenuComponent
            items={items}
            categories={categories}
            setCategories={setCategories}
            setItemsByCategory={setItemsByCategory}
          />
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '2vh 2vw',
          }}
        >
          <img height="10px" src={divider} alt="" />
        </div>
        {loading && <LoaderComponent />}
        {!loading && (
          <div style={{ position: 'relative' }}>
            {itemsCategory.map((item) => (
              <ItemComponent
                key={item.id}
                item={item}
                setCategories={setCategories}
              />
            ))}
            <img
              loading="lazy"
              src={element}
              alt="element"
              width="100%"
              style={{
                position: 'absolute',
                zIndex: '49',
                bottom: '-20px',
                right: '-40px',
                maxWidth: '50px',
                width: '100%',
              }}
            />
          </div>
        )}
      </Container>
    </Transition>
  );
};

ItemElement.defaultProps = {
  MenuComponent: undefined,
};

ItemElement.propTypes = {
  endpoint: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  MenuComponent: PropTypes.elementType,
};

export default ItemElement;
