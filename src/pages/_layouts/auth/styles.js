import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 340px;
  text-align: center;
  background: #ffffff;

  img {
    margin-top: 30px;
    height: 100px;
    width: 140px;
  }

  h1 {
    font-size: 29px;
    margin-top: 20px;
    color: #ee4d64;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  h2 {
    text-align: left;
    font-size: 12px;
    padding-bottom: 5px;
    font-family: Roboto, sans-serif;
    padding-left: 20px;
    color: #444;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      font-size: 16px;
      font-family: 'Roboto';
      border-radius: 4px;
      border: 1px solid #e9e9e9;
      height: 44px;
      width: 300px;
      margin: 3px 20px 10px;
      padding-left: 10px;
    }

    span {
      padding-bottom: 10px;
      align-self: flex-start;
      padding-left: 20px;
      text-align: left;
      color: brown;
      font-weight: bold;
    }

    button {
      margin-left: 20px;
      margin-bottom: 30px;
      height: 44px;
      width: 300px;
      background: #7d40e7;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;
    }
  }
`;
