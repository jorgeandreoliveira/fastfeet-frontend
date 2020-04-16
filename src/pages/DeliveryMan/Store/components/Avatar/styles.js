import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    img {
      height: 148px;
      width: 148px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #f4effc;
    }
    input {
      display: none;
    }
  }
`;
