import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid #e9e9e9;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 10px;
    }

    h1 {
      color: #7d40e7;
      font-size: 15px;
      margin-right: 20px;
      padding-right: 40px;
      border-right: 1px solid #ddd;
    }

    a {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: #444;
      text-align: left;
      padding-left: 20px;
    }
  }

  /* aside {
    display: flex;
    align-items: center;

  }*/
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #666;
      padding-bottom: 5px;
    }

    a {
      color: #de3b3b;
    }
  }
`;
