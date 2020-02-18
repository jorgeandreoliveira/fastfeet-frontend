import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100px;
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

  input {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    border-radius: 4px;
    opacity: 1;
    width: 230px;
    height: 36px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 10px;
  align-items: center;
  justify-content: center;

  div {
    text-align: right;
    margin-right: 100px;

    button {
      height: 36px;
      width: 142px;
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      font-weight: bold;

      padding-right: 10px;
      color: #fff;
    }

    input {
      width: 230px;
      height: 36px;
      padding-left: 10px;
      margin-left: 10px;
    }
  }
`;

export const TdCenter = styled.td`
  text-align: center;
`;

export const List = styled.table`
  background: #fff;

  th,
  td {
    padding: 0 0 8px 90px;
  }
  th {
    text-align: left;
  }
  td {
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
