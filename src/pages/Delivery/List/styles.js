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
  justify-content: space-between;
  display: flex;
  align-items: center;

  input {
    border: 0px;
    padding-left: 30px;
    width: 230px;
    height: 36px;
  }

  img {
    position: absolute;
    top: 5px;
    left: 2px;
    width: 24px;
  }

  button {
    color: #ffffff;
    margin-right: 20px;
    background: #7d40e7;
    border-radius: 4px;
    opacity: 1;
    width: 142px;
    height: 36px;
    font-size: 14px;
    font-weight: bold;
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

export const ImageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.text`
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: 14px;
  font-weight: bold;
`;

export const Rectangle = styled.div`
  display: flex;
  width: 118px;
  height: 25px;
  border-radius: 12px;
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.backgroundcolor};
  margin-right: 6px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
`;
