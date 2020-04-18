import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '~/services/auth';
import { Container, Content, Profile, Separator } from './styles';
import Logo from '~/pages/assets/headerlogo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Logo" />
          <Separator />
          <NavLink activeStyle={{ color: '#444' }} exact to="/DeliveryList">
            ENCOMENDAS
          </NavLink>
          <NavLink activeStyle={{ color: '#444' }} exact to="/DeliveryManList">
            ENTREGADORES
          </NavLink>
          <NavLink activeStyle={{ color: '#444' }} exact to="/RecipientList">
            DESTINATÁRIOS
          </NavLink>
          <NavLink
            activeStyle={{ color: '#444' }}
            exact
            to="/DeliveryProblemList"
          >
            PROBLEMAS
          </NavLink>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <NavLink to="/Login" onClick={() => logout()}>
                sair do sistema
              </NavLink>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
