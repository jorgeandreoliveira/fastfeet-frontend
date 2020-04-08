import styled from 'styled-components';

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
  height: 307px;
  width: 900px;
  background: #fff;
  border-radius: 4px;
  margin-left: 270px;
  margin-right: 270px;

  h1 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #444;
    padding: 30px 0px 5px 30px;
  }
  select {
    background: #fff;
    border: 1px solid #dddddd;
    height: 45px;
    width: 405px;
    border-radius: 4px;
    margin-left: 30px;
    text-align: left;
    letter-spacing: 0;
    color: #999999;
    opacity: 1;
  }
    input {
      height: 45px;
      width: 840px;
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 16px;
      margin-left: 30px;
      letter-spacing: 0;
      color: #999999;
      opacity: 1;
    }
    .disabled {
      background: #f5f5f5;
    }
  }
`;

export const Wrapper = styled.div`
  width: 900px;
`;

export const Left = styled.div`
  float: left;
  width: 435px;
`;

export const Right = styled.div`
  float: right;
  width: 465px;
`;

export const Product = styled.div`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444;
  padding: 80px 0px 0px 0px;
`;

export const TextButton = styled.text`
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  font-size: 14px;
  font-weight: bold;
`;
