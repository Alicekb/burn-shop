import styled from "@emotion/styled";

const MainArea = styled.div`
  margin-top: 80px;

  @media (min-width: 1000px) {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PageArea = styled(MainArea)`
  grid-template-columns: 1fr;
  justify-items: center;

  h2 {
    justify-self: start;
  }
`;

export { PageArea, MainArea };
