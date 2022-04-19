import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  color: var(--write-50);

  img {
    margin-bottom: 30px;
    animation: go-back 1.7s infinite alternate;
  }
  strong {
    color: #12cc94;
  }
`;

export const ContainerAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 40px;
  background-color: #7900fb;
  border-radius: 8px;
  margin-top: 20px;
  span {
    font-size: 20px;
    color: antiquewhite;
    color: #d1e8e4;
    font-weight: bold;
  }
  @keyframes go-back {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }
`;
