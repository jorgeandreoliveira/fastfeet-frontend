import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

// import Logo from '~/pages/assets/logo2.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          {/* <img src={Logo} alt="Logo" /> */}
          <h1>FASTFEET</h1>
          <Link to="/DeliveryList">ENCOMENDAS</Link>
          <Link to="/DeliveryManList">ENTREGADORES</Link>
          <Link to="/RecipientList">DESTINATÁRIOS</Link>
          <Link to="/DeliveryProblemList">PROBLEMAS</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <Link to="/Logout">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
