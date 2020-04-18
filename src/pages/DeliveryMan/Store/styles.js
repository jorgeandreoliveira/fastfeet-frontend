import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  margin-left: 120px;

  h1 {
    color: #444;
    font-size: 24px;
    margin-left: 150px;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
  text-align: right;
  margin-right: 200px;
`;

export const ButtonVoltar = styled.button`
  background: #ccc;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  width: 112px;
  height: 36px;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonSalvar = styled.button`
  background: #7d40e7;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  width: 112px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  height: 400px;
  width: 900px;
  background: #fff;
  border-radius: 4px;
  margin-left: 270px;
  margin-right: 270px;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #444;
    padding: 30px 0 5px 30px;
  }

    input {
      width: 840px;
      height: 45px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      justify-content: space-between;
      margin-left: 30px;
    }
    .disabled {
      background: #f5f5f5;
    }
  }
`;

export const Nome = styled(Input)`
  width: 840px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  margin-left: 30px;
`;

export const TextButton = styled.text`
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: 14px;
  font-weight: bold;
`;

export const Avatar = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: center;
`;
