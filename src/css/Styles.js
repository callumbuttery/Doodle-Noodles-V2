import styled from "styled-components";

export const card = styled.div`
  background-color: var(--dark-grey);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  padding-top: 7%;
`;

export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const Title = styled.p`
  color: #FEF1BE;
  font-size: 80px;
  font-family: "Fredoka One", cursive;
  font-weight: 500;
  letter-spacing: 6px;
  margin: 0px;
`;


export const Description = styled.p`
  color: #FEF1BE;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
`;

