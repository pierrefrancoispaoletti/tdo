import React from 'react';
import '../../styles/items.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import Links from '../../datas/links';
import divider from './T7.png';
import './main.scss';
import ItemTitle from '../Items/ItemTitle/ItemTitle';

const Main = () => (
  <>
    <ItemTitle title="Le Temps des Oliviers" />
    <Divider hidden />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '2vh 2vw',
      }}
    >
      <img height="10px" src={divider} alt="" />
    </div>
    <div className="main">
      {Links.map((link) => (
        <Link to={link.slug}>
          <button type="button" className="icons">
            <div className="header">
              <FontAwesomeIcon icon={link.icon} size="3x" color="white" />
            </div>
            <span
              style={{
                fontFamily: 'Poppins-ExtraBold',
                textTransform: 'uppercase',
                fontSize: '0.8em',
                textAlign: 'center',
                display: 'inline-block',
                padding: '4px',
                border: '1px solid transparent',
                borderRadius: '12px',
                color: 'black',
                background: '#efdfc6',
              }}
            >
              {link.name}
            </span>
          </button>
        </Link>
      ))}
    </div>
  </>
);

export default Main;
