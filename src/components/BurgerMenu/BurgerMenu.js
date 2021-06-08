// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';

import Links from '../../datas/links';

const BurgerMenu = ({ children, openMenu, setOpenMenu }) => {
  const location = useLocation();
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        direction="left"
        animation="overlay"
        icon="labeled"
        onHide={() => setOpenMenu(false)}
        inverted
        vertical
        visible={openMenu}
        width="thin"
        style={{ background: '#656439' }}
      >
        {Links.map((link) => (
          <Link
            key={link.name}
            to={link.slug}
            onClick={() => setOpenMenu(false)}
          >
            <Menu.Item
              active={location.pathname === link.slug}
              className="foodItems main__title"
            >
              <Menu.Header>
                <FontAwesomeIcon icon={link.icon} color="white" size="3x" />
              </Menu.Header>
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
            </Menu.Item>
          </Link>
        ))}
      </Sidebar>
      <Sidebar.Pusher dimmed={openMenu}>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

BurgerMenu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BurgerMenu;
