import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile, Separator } from './styles';
import Logo from '../../pages/assets/headerlogo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Logo" />
          <Separator />
          <Link to="/DeliveryList">ENCOMENDAS</Link>
          <Link to="/DeliveryManList">ENTREGADORES</Link>
          <Link to="/RecipientList">DESTINATÁRIOS</Link>
          <Link to="/DeliveryProblemList">PROBLEMAS</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <Link to="/Login">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
