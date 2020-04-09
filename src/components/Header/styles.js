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
  margin-left: 10px;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 26px;
    }

    a {
      font-size: 15px;
      font-weight: bold;
      color: #999;
      text-align: left;
      padding-left: 20px;
    }
  }
`;

export const Separator = styled.span`
  top: 16px;
  left: 195px;
  width: 1px;
  height: 32px;
  background: #dddddd 0% 0% no-repeat padding-box;
  opacity: 1;
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
