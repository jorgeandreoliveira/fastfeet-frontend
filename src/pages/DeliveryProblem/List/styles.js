import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 1440px;
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
  margin-left: 120px;

    h1 {
      color: #444444;
      font-size: 24px;
    }
  }
`;

export const Busca = styled.div`
  height: 36px;
  padding-left: 120px;
  justify-content: space-between;
  display: flex;

  input {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    border-radius: 4px;
    opacity: 1;
    width: 230px;
    height: 36px;
  }

  button {
    color: #ffffff;
    margin-right: 100px;
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;
    opacity: 1;
    width: 142px;
    height: 36px;
  }
`;

export const List = styled.table`
  background: #f5f5f5;
  margin-top: 10px;
  th,
  td {
    padding: 0 0 0 90px;
  }
  th {
    text-align: left;
  }
  td {
    font-size: 16px;
    background-color: #ffffff;
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
