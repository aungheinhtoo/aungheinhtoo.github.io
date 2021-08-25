import React from 'react';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { Tile } from 'carbon-components-react/lib/components/Tile';
import { SideNavDivider } from 'carbon-components-react/lib/components/UIShell';

import { StyledNotice, StyledSideNav } from './styles';

const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Education', path: '/education' },
];


const Sidebar = () => {
  const location = useLocation();

  return (
    <Fragment>
      <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
        <SideNavItems>
          {items.map(i => (
            <SideNavLink
              isActive={
                location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
              }
              element={Link}
              to={i.path}
              key={i.name}
            >
              {i.name}
            </SideNavLink>
          ))}
          <SideNavDivider />
          <StyledNotice>
            This website is currently under development
          </StyledNotice>
        </SideNavItems>
      </StyledSideNav>
    </Fragment>
  );
};

export default Sidebar;
