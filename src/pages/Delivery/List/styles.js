import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 900px;
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

export const Busca = styled.div`
  height: 36px;
  justify-content: space-between;
  display: flex;
  align-items: center;
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
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  width: 1200px;
  border-collapse: separate;
  border-spacing: 0 5px;
  th {
    background: #f5f5f5;
    height: 57px;
    text-align: left;
    letter-spacing: 0;
    color: #444444;
    opacity: 1;
  }
  td {
    height: 57px;
    text-align: left;
    letter-spacing: 0;
    color: #666666;
    opacity: 1;
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
