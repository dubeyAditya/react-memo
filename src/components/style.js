import "antd/dist/antd.css";
import styled from "styled-components";
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0 1rem;
  height: 98vh;
`;

export const GridBodyWrapper = styled.div`
  flex-grow: 1;
  background: #fafafa;
`;

export const GridHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    flex-basis: 10rem;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    & > div {
      margin-bottom: 1rem;
    }
  }
`;
