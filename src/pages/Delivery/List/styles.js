import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100px;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 120px;

  nav {
    display: flex;
    align-items: center;

    h1 {
      color: #444;
      font-size: 24px;
      margin-right: 10px;
      padding-right: 50px;
    }
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
      background: #ee4d64;
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
    padding: 0 0 8px 150px;
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
