import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 990px;
  height: 900px;
`;

export const Content = styled.div`
  width: 1200px;
  height: 100%;
  margin-left: 120px;
`;

export const Titulo = styled.div`
  height: 64px;
  display: flex;
  align-items: center;

    h1 {
      color: #444444;
      font-size: 24px;
    }
  }
`;

export const List = styled.table`
  background: #f5f5f5;
  border-radius: 4px;
  opacity: 1;
  width: 1200px;
  border-collapse: separate;
  border-spacing: 0 21px;
  th {
    height: 14px;
    text-align: left;
    color: #444;
  }
  td {
    background: #ffffff 0% 0% no-repeat padding-box;
    height: 57px;
    text-align: left;
    letter-spacing: 0;
    opacity: 1;
    border-radius: 4px;
    color: #666;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
`;

export const LinkEditar = styled(Link)`
  font-size: 15px;
  color: #4d85ee;
`;

export const LinkApagar = styled(Link)`
  font-size: 15px;
  color: #de3b3b;
`;
