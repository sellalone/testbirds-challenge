import * as cn from 'classnames';
import * as React from 'react';
import { SFC } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from '../../assets/images/logo.svg';

const Header: SFC = () => {
  return (
    <Navbar
      className={cn({
        'bg-primary': true,
      })}
      light={true}
    >
      <NavbarBrand href="/">
        <img src={`${logo}`} />
      </NavbarBrand>
    </Navbar>
  );
};

export { Header };
