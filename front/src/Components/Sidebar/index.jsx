import React, { useState } from 'react';
import { Link } from 'react-router';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import logo from './assets/logoTransporent.png';
import { ReactComponent as IngredientIcon } from './assets/ingredient_icon.svg';

export const AppSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
      <Sidebar
        collapsed={!open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        rootStyles={{
          height: '100%',
          background: 'rgba(249, 249, 249, 1)',
          boxShadow: '0px 5px 5px grey',
          position: 'absolute',
          "& .ps-menu-label2": {
            display: 'flex',
            alignItems: 'center'
          },
          "& .ps-menuitem-root:hover": {
            color: 'purple',
            '& svg': {
              fill: 'purple',
            }
          }
        }}
      >
        <Menu>
          <img src={logo} alt="logo" width="80" height="80"/>
          <MenuItem
            icon={<IngredientIcon width="24" height="24" alt="ingredients" />}
            component={<Link to="/dashboard"/>}
          >
            <span>Dashboard</span>
          </MenuItem>
          <MenuItem
            icon={<IngredientIcon width="24" height="24" alt="ingredients" />}
            component={<Link to="/dishes"/>}
          >
            <span>Dishes</span>
          </MenuItem>
          <MenuItem
            icon={<IngredientIcon width="24" height="24" alt="ingredients" />}
            component={<Link to="/ingredients"/>}
          >
            <span>Ingredients</span>
          </MenuItem>
        </Menu>
      </Sidebar>
  );
}
